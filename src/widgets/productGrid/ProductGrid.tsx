import { useGetAllProductsQuery } from '@/entities/product/api';
import scss from './ProductGrid.module.scss';
import Product from '@/features/cart/product/Product';

const ProductGrid = () => {
	const { data, isSuccess } = useGetAllProductsQuery();

	return (
		<div className={scss.ProductGrid}>
			<div className={scss.content_title}>
				<h1>Curated Essentials</h1>
				<p>
					A collection of carefully selected items for the modern lifestyle.
					Focusing on quality, minimalism, and functionality.
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
