import { Link, useNavigate } from 'react-router-dom';
import Button from '../../shared/ui/Button/Button';
import Input from '../../shared/ui/Input/Input';
import scss from './Register.module.scss';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import AuthForm from '../../shared/ui/form/AuthForm';
const Register = () => {
	const [isPassword, setIsPassword] = useState(false);
	const [confisPassword, setconfIsPassword] = useState(false);
	const navigate = useNavigate();
	return (
		<div className={scss.Register}>
			<div className='container'>
				<div className={scss.content}>
					<AuthForm
						title='Create an account '
						info='Enter your details to create your account'
					>
						<label className={scss.inputs}>
							Full name
							<Input variant='default' placeholder='John Doe' type='text' />
						</label>
						<label className={scss.inputs}>
							Email
							<Input
								variant='default'
								placeholder='name@exemple.com'
								type='email'
							/>
						</label>
						<label className={scss.inputs}>
							Password
							<Input
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
								placeholder='••••••••'
								type={confisPassword ? 'text' : 'password'}
							/>
							<div className={scss.password}>
								{!confisPassword ? (
									<EyeOff
										size={18}
										onClick={() => {
											setconfIsPassword(!confisPassword);
										}}
									/>
								) : (
									<Eye
										size={18}
										onClick={() => {
											setconfIsPassword(!confisPassword);
										}}
									/>
								)}
							</div>
						</label>
						<div className={scss.form_footer}>
							<div className={scss.btn}>
								<Button
									type='submit'
									onClick={() => {
										navigate('/register');
									}}
								>
									Create Account
								</Button>
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
		</div>
	);
};

export default Register;
