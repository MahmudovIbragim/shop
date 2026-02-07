import type { ChangeEvent, FC } from 'react';
import scss from './Input.module.scss';
import { Search } from 'lucide-react';

type InputProps = {
	placeholder: string;
	value?: string;
	type: string;
	variant: 'default' | 'search';
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
	placeholder,
	variant,
	value,
	type,
	onChange,
}) => {
	console.log(variant);

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
					className={scss.input}
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
