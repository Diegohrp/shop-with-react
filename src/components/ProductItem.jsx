import React from 'react';
import '@styles/ProductItem.scss';
import iconAddToCart from '@icons/bt_add_to_cart.svg';

function ProductItem({ item }) {
	const [cart, setCart] = React.useState([]);
	const handleCart = () => {
		setCart('Hola mundo');
	};

	return (
		<div className='product-item'>
			<img
				src={item.images[0] || item.category.image}
				alt={item.title}
				className='product-item__img'
			/>
			<div>
				<div className='product-item__details'>
					<p>${item.price}</p>
					<p>{item.title}</p>
				</div>
				<figure onClick={handleCart}>
					<img src={iconAddToCart} alt='shopping car' />
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
