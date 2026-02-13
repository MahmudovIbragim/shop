import type { FC } from 'react';
import scss from './Product.module.scss';

type ProductType = {
	item: Products.Product;
};

const Product: FC<ProductType> = ({ item }) => {
	return (
		<div className={scss.Product}>
			<div key={item.id}>
				<div className={scss.img_cart}></div>
				<div className={scss.decs_cart}>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
					<h3>{item.price}</h3>
				</div>
			</div>
		</div>
	);
};

export default Product;
