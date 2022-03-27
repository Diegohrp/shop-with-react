import React from 'react';
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss';
function ProductList() {
	return (
		<main className='main-container'>
			<section className='product-list'>
				<ProductItem />
			</section>
		</main>
	);
}

export { ProductList };
