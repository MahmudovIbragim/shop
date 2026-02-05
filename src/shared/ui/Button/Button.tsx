import type { FC, ReactNode } from 'react';
import scss from './Button.module.scss';

type ButtonProps = {
	children: ReactNode;
	clsName?: string;
};

const Button: FC<ButtonProps> = ({ children }) => {
	return <button className={scss.Button}>{children}</button>;
};

export default Button;
