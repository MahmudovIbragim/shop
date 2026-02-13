import ProductGrid from '@/widgets/productGrid/ProductGrid';
import scss from './Home.module.scss';
const Home = () => {
	return (
		<div className={scss.Home}>
			<div className='container'>
				<div className={scss.content}>
					<ProductGrid />
				</div>
			</div>
		</div>
	);
};

export default Home;
