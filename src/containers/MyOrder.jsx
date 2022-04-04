import React from 'react';
import { OrderItem } from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import '@styles/MyOrder.scss';
import littleArrowIcon from '@icons/flechita.svg';

function MyOrder() {
	const { state } = React.useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumutator, currentValue) =>
			accumutator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className='main-carts-container'>
			<div className='carts-container'>
				<div className='back-button-carts'>
					<img src={littleArrowIcon} alt='' />
					<p>Shopping cart</p>
				</div>
				{state.cart.map((product, index) => (
					<OrderItem
						product={product}
						key={`orderItem-${product.id}${index}`}
						index={index}
					/>
				))}
				<div className='shopping-total'>
					<p>Total</p>
					<p>${sumTotal()}</p>
				</div>
			</div>
			<input className='shopping-cart__button' type='button' value='Checkout' />
		</aside>
	);
}

export { MyOrder };
