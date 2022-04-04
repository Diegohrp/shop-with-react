import React from 'react';
import '@styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png';
import { AppContext } from '../context/AppContext';

function OrderItem({ product, index }) {
	const { removeToCart } = React.useContext(AppContext);
	return (
		<div className='shopping-cart'>
			<img
				className='shopping-cart__img'
				src={product.images[0] || product.category.image}
				alt='item'
			/>
			<p className='shopping-cart__title'>{product.title}</p>
			<p className='shopping-cart__price'>{`$ ${product.price}`}</p>
			<img src={closeIcon} alt='delete' onClick={() => removeToCart(index)} />
		</div>
	);
}

export { OrderItem };
