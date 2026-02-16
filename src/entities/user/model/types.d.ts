/* eslint-disable @typescript-eslint/no-explicit-any */
namespace Users {
	type RegisterUserRes = {
		id: number;
		email: string;
		username: string;
		password: string;
	};
	type RegisterUserReq = {
		email: string;
		username: string;
		password: string;
	};

	type getUser = {
		access_token: strin;
		expires_at: number;
		expires_in: number;
		refresh_token: string;
		token_type: string;
		user: User;
	};

	export interface User {
		id: string;
		aud: string;
		role: string;
		email: string;
		phone: string;
		created_at: string;
		updated_at: string;
		last_sign_in_at: string;
		email_confirmed_at: string;
		is_anonymous: boolean;

		app_metadata: {
			provider: string;
			providers: string[];
		};

		user_metadata: {
			email: string;
			email_verified: boolean;
			phone_verified: boolean;
			sub: string;
		};

		identities: Identity[];
	}

	export interface Identity {
		identity_id: string;
		id: string;
		user_id: string;
		provider: string;
		identity_data: Record<string, any>; // можно уточнить если нужно
	}
}
