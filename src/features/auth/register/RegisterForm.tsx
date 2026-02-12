import { EyeOff, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@shared//ui/Button/Button';
import AuthForm from '@shared/ui/form/AuthForm';
import Input from '@shared/ui/Input/Input';
import scss from './RegisterForm.module.scss';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import supabase from '@/lib/supabase/supabase';

type Inputs = {
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
};

const RegisterForm = () => {
	const [isPassword, setIsPassword] = useState(false);
	const [confIsPassword, setconfIsPassword] = useState(false);
	const { register, handleSubmit, reset } = useForm<Inputs>();

	const handleRegister: SubmitHandler<Inputs> = async (data) => {
		const newData = {
			id: 99,
			email: data.email,
			username: data.username,
			password: data.password,
		};

		if (data.password !== data.confirmPassword) {
			alert('пароли не совподают');
			return;
		}

		try {
			const { data, error } = await supabase.auth.signUp(newData);
			if (error) throw error;

			if (data.session?.access_token) {
				localStorage.setItem('token', data.session?.access_token);
			}

			const user = data.user;
			if (user) {
				const { error: profileError } = await supabase.from('profiles').insert({
					id: user.id,
					username: newData.username,
					role: 'user',
				});
				if (profileError) throw profileError;
			}

			console.log(data);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className={scss.RegisterForm}>
			<div className={scss.content}>
				<AuthForm
					formSubmit={handleSubmit(handleRegister)}
					title='Create an account '
					info='Enter your details to create your account'
				>
					<label className={scss.inputs}>
						Login
						<Input
							register={register('username')}
							variant='default'
							placeholder='login'
							type='text'
						/>
					</label>
					<label className={scss.inputs}>
						Email
						<Input
							register={register('email')}
							variant='default'
							placeholder='name@exemple.com'
							type='email'
						/>
					</label>
					<label className={scss.inputs}>
						Password
						<Input
							register={register('password')}
							variant='default'
							placeholder='••••••••'
							type={isPassword ? 'text' : 'password'}
						/>
						<div className={scss.password}>
							{!isPassword ? (
								<EyeOff
									size={18}
									onClick={() => {
										setIsPassword(!isPassword);
									}}
								/>
							) : (
								<Eye
									size={18}
									onClick={() => {
										setIsPassword(!isPassword);
									}}
								/>
							)}
						</div>
					</label>
					<label className={scss.inputs}>
						Confirm Password
						<Input
							variant='default'
							register={register('confirmPassword')}
							placeholder='••••••••'
							type={confIsPassword ? 'text' : 'password'}
						/>
						<div className={scss.password}>
							{!confIsPassword ? (
								<EyeOff
									size={18}
									onClick={() => {
										setconfIsPassword(!confIsPassword);
									}}
								/>
							) : (
								<Eye
									size={18}
									onClick={() => {
										setconfIsPassword(!confIsPassword);
									}}
								/>
							)}
						</div>
					</label>
					<div className={scss.form_footer}>
						<div className={scss.btn}>
							<Button type='submit'>Create Account</Button>
						</div>
						<div className={scss.link}>
							<p>
								Already have an account?
								<Link to={'/login'}>Log in</Link>
							</p>
						</div>
					</div>
				</AuthForm>
			</div>
		</div>
	);
};

export default RegisterForm;
