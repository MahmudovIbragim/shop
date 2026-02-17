import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';
import AuthForm from '../../../shared/ui/form/AuthForm';
import Input from '../../../shared/ui/Input/Input';
import scss from './LoginForm.module.scss';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import supabase from '@/lib/supabase/supabase';

type Inputs = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const navigate = useNavigate();
	const {
		reset,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<Inputs>();

	const handleLogin: SubmitHandler<Inputs> = async (values) => {
		console.log(values);

		if (
			(values.email === '' && undefined) ||
			(values.password === '' && undefined)
		)
			return;

		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: values.email,
				password: values.password,
			});
			console.log(data);
			if (data.session) {
				localStorage.setItem('token', data.session.access_token);
				reset();
				toast.success('успешно');
				setTimeout(() => {
					navigate('/');
				}, 1000);
				return;
			}

			if (error?.status === 400) {
				toast.error(`Не правильный логин или пароль`);
				return;
			} else if (error?.status !== 400) {
				toast.error(`${error?.message} ${error?.status}`);
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className={scss.LoginForm}>
			<div className={scss.content}>
				<AuthForm
					formSubmit={handleSubmit(handleLogin)}
					title='Welcome back'
					info='Enter your credentials to access your account'
				>
					<label className={scss.inputs}>
						<p>Email {errors.email?.message ? errors.email?.message : null}</p>
						<Input
							placeholder='login'
							type='email'
							variant='default'
							register={register('email', { required: 'обязателен' })}
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
							})}
							placeholder='·······'
							type='password'
							variant='default'
							typeError={errors.password?.message ? true : false}
						/>
					</label>
					<div className={scss.footer}>
						<div className={scss.btn}>
							<Button type='submit'>Sign In</Button>
						</div>
						<div className={scss.link}>
							<p>
								Don't have an account?
								<Link to={'/register'}>Sign up</Link>
							</p>
						</div>
					</div>
				</AuthForm>
				<ToastContainer />
			</div>
		</div>
	);
};

export default LoginForm;
