import type { FC, ReactNode } from 'react';
import scss from './AuthForm.module.scss';

type FormProps = {
	children: ReactNode;
	title: string;
	info: string;
	formSubmit?: () => void;
};

const AuthForm: FC<FormProps> = ({ children, title, info, formSubmit }) => {
	return (
		<div className={scss.AuthForm}>
			<div className={scss.content}>
				<div className={scss.content_title}>
					<h2>{title}</h2>
					<p>{info}</p>
				</div>

				<form onSubmit={formSubmit}>{children}</form>
			</div>
		</div>
	);
};

export default AuthForm;
