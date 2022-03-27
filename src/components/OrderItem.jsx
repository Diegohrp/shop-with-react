import React from 'react';
import '@styles/OrderItem.scss';
import littleArrow from '@icons/flechita.svg';
function OrderItem() {
	return (
		<section class='order-item'>
			<p>
				<span>04.25.2021</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={littleArrow} alt='arrow' />
		</section>
	);
}

export { OrderItem };
