import { EyeOff, Eye } from 'lucide-react';
import { data, Link, useNavigate } from 'react-router-dom';
import Button from '@shared//ui/Button/Button';
import AuthForm from '@shared/ui/form/AuthForm';
import Input from '@shared/ui/Input/Input';
import scss from './RegisterForm.module.scss';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import supabase from '@/lib/supabase/supabase';
import { Bounce, toast, ToastContainer } from 'react-toastify';

type Inputs = {
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
};

const RegisterForm = () => {
	const navigate = useNavigate();
	const [isPassword, setIsPassword] = useState(false);
	const [confIsPassword, setconfIsPassword] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const handleRegister: SubmitHandler<Inputs> = async (values) => {
		const isEmpty = Object.values(data).some((value) => !value);

		if (isEmpty) {
			toast.warning('Заполните все поля', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Bounce,
			});
			return;
		}

		if (values.password !== values.confirmPassword) {
			toast.error('Пароли не совподают');
			return;
		}

		try {
			const { data, error } = await supabase.auth.signUp({
				email: values.email,
				password: values.password,
				options: {
					data: {
						username: values.username,
					},
				},
			});
			if (error) throw error;

			if (data.session?.access_token) {
				reset();
				navigate('/');
				localStorage.setItem('token', data.session?.access_token);
			}
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
						<p>
							Login {errors.username?.message ? errors.username.message : null}
						</p>
						<Input
							register={register('username', {
								minLength: {
									value: 4,
									message: 'должен быть длиннее 4 символов',
								},
								required: 'обязателен',
							})}
							variant='default'
							placeholder='login'
							type='text'
							typeError={errors.username?.message ? true : false}
						/>
					</label>
					<label className={scss.inputs}>
						<p>Email {errors.email?.message ? errors.email.message : null}</p>
						<Input
							register={register('email', { required: 'обязателен' })}
							variant='default'
							placeholder='name@exemple.com'
							type='email'
							typeError={errors.email?.message ? true : false}
						/>
					</label>
					<label className={scss.inputs}>
						<p>
							Password{' '}
							{errors.password?.message ? errors.password.message : null}
						</p>
						<Input
							register={register('password', {
								required: 'обязателен',
								minLength: {
									value: 6,
									message: 'должен быть менее 6',
								},
							})}
							variant='default'
							placeholder={isPassword ? 'password' : '••••••••'}
							type={isPassword ? 'text' : 'password'}
							typeError={errors.password?.message ? true : false}
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
						<p>
							{' '}
							Confirm Password{' '}
							{errors.confirmPassword?.message
								? errors.confirmPassword.message
								: null}
						</p>
						<Input
							variant='default'
							register={register('confirmPassword', {
								required: 'обязателен',
								minLength: {
									value: 6,
									message: 'должен быть менее 6',
								},
							})}
							placeholder={confIsPassword ? 'password' : '••••••••'}
							type={confIsPassword ? 'text' : 'password'}
							typeError={errors.confirmPassword?.message ? true : false}
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
				<ToastContainer />
			</div>
		</div>
	);
};

export default RegisterForm;
