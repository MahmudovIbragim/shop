import type { ChangeEvent, FC } from 'react';
import scss from './Input.module.scss';
import { Search } from 'lucide-react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
	placeholder: string;
	value?: string;
	type: string;
	register?: UseFormRegisterReturn;
	variant: 'default' | 'search';
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
	placeholder,
	variant,
	value,
	type,
	register,
	onChange,
}) => {
	return (
		<>
			{variant === 'search' ? (
				<div className={scss.box_input}>
					<Search size={18} />
					<input
						className={scss.input}
						placeholder={placeholder}
						type={type}
						value={value}
						onChange={onChange}
					/>
				</div>
			) : (
				<input
					{...register}
					className={scss.inputs}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			)}
		</>
	);
};

export default Input;
