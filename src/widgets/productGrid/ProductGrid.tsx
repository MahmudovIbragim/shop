import { useGetAllProductsQuery } from '@/entities/product/api';
import scss from './ProductGrid.module.scss';
import Product from '@/features/cart/product/Product';

const ProductGrid = () => {
	const { data, isSuccess } = useGetAllProductsQuery();

	return (
		<div className={scss.ProductGrid}>
			<div className={scss.content_title}>
				<h1>Рекомендуемые предметы первой необходимости</h1>
				<p>
					Коллекция тщательно отобранных предметов для современного образа
					жизни. Основной акцент — качество, минимализм и функциональность.
				</p>
			</div>
			<div className={scss.product}>
				{isSuccess
					? data.products.map((item) => <Product item={item} />)
					: null}
			</div>
		</div>
	);
};

export default ProductGrid;
