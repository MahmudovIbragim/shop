import { Heart, LogOut, ShoppingBag } from 'lucide-react';
import scss from './Header.module.scss';
import Button from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/app/provider/AuthProvider';
import { useState } from 'react';
import Modal from '@/shared/ui/modal/Modal';

const Header = () => {
	const navigate = useNavigate();
	const { user, signOut } = useAuth();
	const [isModal, setIsModal] = useState(false);

	return (
		<div className={scss.Header}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.left_content}>
						<div
							className={scss.logo}
							onClick={() => {
								navigate('/');
							}}
						>
							<div className={scss.logo_icon}></div>
							<p>MONO</p>
						</div>
					</div>
					<div className={scss.right_content}>
						<div className={scss.search}>
							<Input
								variant='search'
								type='text'
								placeholder='search product...'
							/>
						</div>
						<div className={scss.btns}>
							<div className={scss.icon}>
								<button
									onClick={() => {
										navigate('/favorites');
									}}
								>
									<Heart />
								</button>
							</div>
							<div className={scss.icon}>
								<button
									onClick={() => {
										navigate('/basket');
									}}
								>
									<ShoppingBag />
								</button>
							</div>
							{user ? (
								<div className={scss.profile}>
									<div className={scss.userData}>
										<p>
											{' '}
											{user.user_metadata.username === undefined
												? 'your name'
												: user.user_metadata.username}
										</p>
										<p>{user.email}</p>
									</div>
									<button
										onClick={() => {
											setIsModal(true);
										}}
									>
										<LogOut />
									</button>
								</div>
							) : (
								<div className={scss.button}>
									<Button
										onClick={() => {
											navigate('/login ');
										}}
									>
										Sign In
									</Button>
								</div>
							)}
						</div>
						<Modal
							isOpen={isModal}
							onClose={() => {
								setIsModal(false);
							}}
						>
							<div className={scss.modal}>
								<h1>Вы уверены что хотите выйти ?</h1>
								<div className={scss.btns}>
									<Button onClick={() => setIsModal(false)}>Отмена</Button>
									<Button
										onClick={() => {
											signOut();
											setIsModal(false);
										}}
									>
										Выйти
									</Button>
								</div>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
