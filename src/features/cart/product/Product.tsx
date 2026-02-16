import type { FC } from 'react';
import scss from './Product.module.scss';

type ProductType = {
	item: Products.Product;
};

const Product: FC<ProductType> = ({ item }) => {
	return (
		<div className={scss.Product}>
			<div className={scss.cart} key={item.id}>
				<div className={scss.img_cart}>
					<img src={item.images[0]} alt={`image${item.title}`} />
				</div>
				<div className={scss.decs_cart}>
					<h3>{item.title}</h3>
					<p>{item.category}</p>
					<h4>${item.price}</h4>
				</div>
			</div>
		</div>
	);
};

export default Product;
