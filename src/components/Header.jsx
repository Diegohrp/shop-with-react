import React from 'react';
import { Menu } from './Menu';
import '@styles/Header.scss';
import menuIcon from '@icons/icon_menu.svg';
import logoYardSale from '@images/logo_yard_sale.svg/';
import iconShoppingCart from '@icons/icon_shopping_cart_notification.svg';
function Header() {
	const [toggleMenu, setToggleMenu] = React.useState(false);

	const handleToggle = () => {
		setToggleMenu(!toggleMenu);
	};

	return (
		<header>
			<nav className='navbar'>
				<ul className='navbar__items-container'>
					<li className='navbar__menu' onClick={handleToggle}>
						<img src={menuIcon} alt='menu' />
					</li>
					<div className='navbar__items-container--left'>
						<li className='navbar__logo'>
							<img src={logoYardSale} alt='yard sale logo' />
						</li>
						<div className='navbar__categories'>
							<li>
								<a href='#'>All</a>
							</li>
							<li>
								<a href='#'>Clothes</a>
							</li>
							<li>
								<a href='#'>Electronics</a>
							</li>
							<li>
								<a href='#'>Furniture</a>
							</li>
							<li>
								<a href='#'>Toys</a>
							</li>
							<li>
								<a href='#'>Others</a>
							</li>
						</div>
					</div>
					<div className='navbar__shopping'>
						<li onClick={handleToggle}>myemail@example.com</li>
						<li>
							<img src={iconShoppingCart} alt='shopping cart' />
						</li>
						<li>2</li>
					</div>
				</ul>
				{!!toggleMenu && <Menu />}
			</nav>
		</header>
	);
}

export { Header };
