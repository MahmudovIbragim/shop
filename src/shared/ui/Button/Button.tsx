import type { FC, MouseEvent, ReactNode } from 'react';
import scss from './Button.module.scss';

type ButtonProps = {
	children: ReactNode;
	clsName?: string;
	type?: 'submit' | 'reset' | 'button';
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ children, onClick, type }) => {
	return (
		<button className={scss.Button} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default Button;
