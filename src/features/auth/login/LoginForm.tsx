import { Link } from 'react-router-dom';
import Button from '../../../shared/ui/Button/Button';
import AuthForm from '../../../shared/ui/form/AuthForm';
import Input from '../../../shared/ui/Input/Input';
import scss from './LoginForm.module.scss';

const LoginForm = () => {
	return (
		<div className={scss.LoginForm}>
			<div className={scss.content}>
				<AuthForm
					title='Welcome back'
					info='Enter your credentials to access your account'
				>
					<label className={scss.inputs}>
						Login
						<Input placeholder='login' type='text' variant='default' />
					</label>
					<label className={scss.inputs}>
						Password
						<Input placeholder='·······' type='password' variant='default' />
					</label>
					<div className={scss.footer}>
						<div className={scss.btn}>
							<Button>Sign In</Button>
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
