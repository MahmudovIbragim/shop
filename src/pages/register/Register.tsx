import RegisterForm from '@features/auth/register/RegisterForm';
import scss from './Register.module.scss';
const Register = () => {
	return (
		<div className={scss.Register}>
			<div className='container'>
				<div className={scss.content}>
					<RegisterForm />
				</div>
			</div>
		</div>
	);
};

export default Register;
