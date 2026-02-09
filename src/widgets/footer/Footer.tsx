import { Link } from 'react-router-dom';
import scss from './Footer.module.scss';
const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.left_content}>
						<p>© 2026 Mono Store. All rights reserved.</p>
					</div>
					<div className={scss.right_content}>
						<Link target='_blank' to={'https://github.com/MahmudovIbragim'}>
							Author
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
