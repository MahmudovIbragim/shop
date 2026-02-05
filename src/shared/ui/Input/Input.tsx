import type { ChangeEvent, FC } from 'react';
import scss from './Input.module.scss';
import { Search } from 'lucide-react';

type InputProps = {
	placeholder: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({ placeholder, value, onChange }) => {
	return (
		<>
			<label  className={scss.Input}>
				<Search size={18} />
				<input placeholder={placeholder} value={value} onChange={onChange} /> 
			</label>
		</>
	);
};

export default Input;
