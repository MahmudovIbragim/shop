import { Outlet } from 'react-router-dom';
import Footer from '../../widgets/footer/Footer';
import Header from '../../widgets/header/Header';
import scss from './Layout.module.scss';

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<div className={scss.content}>
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
