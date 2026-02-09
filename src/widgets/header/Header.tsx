import { Heart, ShoppingBag } from 'lucide-react';
import scss from './Header.module.scss';
import Button from '../../shared/ui/Button/Button';
import Input from '../../shared/ui/Input/Input';
import { useNavigate } from 'react-router-dom';
const Header = () => {
	const navigate = useNavigate();
	return (
		<div className={scss.Header}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.left_content}>
						<div className={scss.logo}>
							<div className={scss.logo_icon}></div>
							<p>MONO</p>
						</div>
					</div>
					<div className={scss.right_content}>
						<div className={scss.search}>
							<Input
								variant='search'
								type='text'
								placeholder='search produc t...'
							/>
						</div>
						<div className={scss.btns}>
							<div className={scss.icon}>
								<Heart />
							</div>
							<div className={scss.icon}>
								<ShoppingBag />
							</div>
							<div className={scss.button}>
								<Button
									onClick={() => {
										navigate('/login ');
									}}
								>
									Sign In
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
