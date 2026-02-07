import { Link } from 'react-router-dom';
import Button from '../../shared/ui/Button/Button';
import Input from '../../shared/ui/Input/Input';
import scss from './Register.module.scss';
const Register = () => {
	return (
		<div className={scss.Register}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.content_form}>
						<div className={scss.content_title}>
							<h2>Create an account</h2>
							<p>Enter your details to create your account</p>
						</div>
						<form>
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
									type='password'
								/>
							</label>
							<label className={scss.inputs}>
								Confirm Password
								<Input
									variant='default'
									placeholder='••••••••'
									type='password'
								/>
							</label>
							<div className={scss.form_footer}>
								<div className={scss.btn}>
									<Button>Create Account</Button>
								</div>
								<div className={scss.link}>
									<p>
										Already have an account?
										<Link to={'/login'}>Log in</Link>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
