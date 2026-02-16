import { Link } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';
import AuthForm from '../../../shared/ui/form/AuthForm';
import Input from '../../../shared/ui/Input/Input';
import scss from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
	const { reset, handleSubmit, register } = useForm();
	return (
		<div className={scss.LoginForm}>
			<div className={scss.content}>
				<AuthForm
					title='Welcome back'
					info='Enter your credentials to access your account'
				>
					<label className={scss.inputs}>
						Email
						<Input placeholder='login' type='email' variant='default' />
					</label>
					<label className={scss.inputs}>
						Password
						<Input placeholder='·······' type='password' variant='default' />
					</label>
					<div className={scss.footer}>
						<div className={scss.btn}>
							<Button type='button'>Sign In</Button>
						</div>
						<div className={scss.link}>
							<p>
								Don't have an account?
								<Link to={'/register'}>Sign up</Link>
							</p>
						</div>
					</div>
				</AuthForm>
			</div>
		</div>
	);
};

export default LoginForm;
