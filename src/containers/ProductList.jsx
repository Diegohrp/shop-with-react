import React from 'react';
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss';
const API = 'https://api.escuelajs.co/api/v1/products';
import { useGetProducts } from '../hooks/useGetProducts';

function ProductList() {
	const products = useGetProducts(API);
	return (
		<main className='main-container'>
			<section className='product-list'>
				{products.map((product, index) => (
					<ProductItem item={product} key={product.id} index={index} />
				))}
			</section>
		</main>
	);
}

export { ProductList };
