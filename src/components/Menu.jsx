import React from 'react';
import '@styles/Menu.scss';
function Menu() {
	return (
		<>
			<ul className='menu-desktop'>
				<div>
					<li>
						<a href='#'>My orders</a>
					</li>
					<li>
						<a href='#'>My account</a>
					</li>
				</div>
				<li className='menu-desktop__sign-out'>Sign out</li>
			</ul>
			<ul className='menu-mobile'>
				<div className='menu-mobile__categories'>
					<li>
						<p>CATEGORIES</p>
					</li>
					<li>
						<a href=''>All</a>
					</li>
					<li>
						<a href=''>Cothes</a>
					</li>
					<li>
						<a href=''>Electronics</a>
					</li>
					<li>
						<a href=''>Furnitures</a>
					</li>
					<li>
						<a href=''>Toys</a>
					</li>
					<li>
						<a href=''>Others</a>
					</li>
				</div>
				<li className='menu-mobile__border'></li>
				<div className='menu-mobile__account'>
					<li>
						<a href=''>My orders</a>
					</li>
					<li>
						<a href=''>My account</a>
					</li>
				</div>
				<div className='menu-mobile__sign-out'>
					<li>
						<p>myemail@gmail.com</p>
					</li>
					<li>
						<a href=''>Sign out</a>
					</li>
				</div>
			</ul>
		</>
	);
}

export { Menu };
