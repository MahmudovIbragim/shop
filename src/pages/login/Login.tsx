import { Link } from 'react-router-dom';
import Button from '../../shared/ui/Button/Button';
import AuthForm from '../../shared/ui/form/AuthForm';
import Input from '../../shared/ui/Input/Input';
import scss from './Login.module.scss';
const Login = () => {
	return (
		<div className={scss.Login}>
			<div className='container'>
				<div className={scss.content}>
					<AuthForm
						title='Welcome back'
						info='Enter your credentials to access your account'
					>
						<label className={scss.inputs}>
							Email
							<Input
								placeholder='name@exemple.com'
								type='email'
								variant='default'
							/>
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
		</div>
	);
};

export default Login;
