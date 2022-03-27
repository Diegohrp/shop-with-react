import React from 'react';
import '../styles/ProductItem.scss';
function ProductItem() {
	return (
		<div className='product-item'>
			<img
				src='https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				alt='product'
				className='product-item__img'
			/>
			<div>
				<div className='product-item__details'>
					<p>$1,200</p>
					<p>Laptop</p>
				</div>
				<figure>
					<img src='../icons/bt_add_to_cart.svg' alt='shopping car' />
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
