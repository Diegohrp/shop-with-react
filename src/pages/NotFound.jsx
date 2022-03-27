import React from 'react';
import '../styles/NotFound.scss';
function NotFound() {
	return (
		<div className='Not-found-container'>
			<img src='#' alt='Not found image' />
			<h2>
				The content you are looking for is not available or it doesn't exist
			</h2>
			<a href='https://storyset.com/web'>Web illustrations by Storyset</a>
		</div>
	);
}

export { NotFound };
