/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import supabase from '@/lib/supabase/supabase';
import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type FC,
	type ReactNode,
} from 'react';
import type { User } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

type AuthProviderType = {
	children: ReactNode;
};

type AuthState = {
	loading: boolean;
	user: User | null;
	profile: Profile | null;
	signOut: () => Promise<void>;
	refresh: () => Promise<void>;
};

type Profile = { username: string; role: string };

const AuthContext = createContext<AuthState | null>(null);

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);
	const [profile, setProfile] = useState<Profile | null>(null);
	const naviagte = useNavigate();

	const loadProfile = async (userId: string) => {
		const { data, error } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', userId)
			.maybeSingle();

		if (error) {
			console.error(error);
			setProfile(null);
			return;
		}
		setProfile(data ?? null);
	};

	const refresh = async () => {
		setLoading(true);
		const { data } = await supabase.auth.getSession();

		console.log(data, 'session data');
		const session = data.session;

		if (!session?.user) {
			setUser(null);
			setProfile(null);
			setLoading(false);
			return;
		}

		setUser(session.user);
		await loadProfile(session.user.id);
		setLoading(false);
	};

	useEffect(() => {
		refresh();

		const { data: sub } = supabase.auth.onAuthStateChange(
			(__event, session) => {
				console.log(session, 'session');

				if (!session?.user) {
					setUser(null);
					setProfile(null);
					setLoading(false);
					return;
				}
				setUser(session.user);
				loadProfile(session.user.id);
				setLoading(false);
			},
		);
		return () => sub.subscription.unsubscribe();
	}, []);

	const signOut = async () => {
		localStorage.removeItem('token');
		await supabase.auth.signOut();
		naviagte('/login');
	};

	const value = useMemo(
		() => ({ loading, user, profile, signOut, refresh }),
		[loading, user, profile],
	);

	return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
};
