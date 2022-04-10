import React from 'react';
import '@styles/ProductItem.scss';
import iconAddToCart from '@icons/bt_add_to_cart.svg';
import iconAddedToCart from '@icons/bt_added_to_cart.svg';
import { useCart } from '../hooks/useCart';

function ProductItem({ item }) {
	//custom hook useCart para poder cambiar el estado del ícono add
	//Para que cuando se elimine el producto desde el chekout, cambie el ícono igual
	const { added, handleCart } = useCart(item);
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
					{!added && <img src={iconAddToCart} alt='shopping cart' />}
					{!!added && <img src={iconAddedToCart} alt='shopping cart added' />}
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
