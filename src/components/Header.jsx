import React from 'react';
import { Menu } from './Menu';
import '@styles/Header.scss';
import menuIcon from '@icons/icon_menu.svg';
import { MyOrder } from '@containers/MyOrder';
import logoYardSale from '@images/logo_yard_sale.svg/';
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg';
import { AppContext } from '../context/AppContext';

function Header() {
	const [toggleMenu, setToggleMenu] = React.useState(false);
	const [toggleOrder, setToggleOrder] = React.useState(false);

	const { state } = React.useContext(AppContext);

	const handleToggle = () => {
		setToggleMenu(!toggleMenu);
	};

	const handleToggleOrder = () => {
		if (state.cart.length) {
			setToggleOrder(!toggleOrder);
		}
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
						<li className='navbar__shopping-cart' onClick={handleToggleOrder}>
							<img src={iconShoppingCart} alt='shopping cart' />
						</li>
						{!!state.cart.length && (
							<li className='navbar__num-products'>{state.cart.length}</li>
						)}
					</div>
				</ul>
				{!!toggleMenu && <Menu />}
				{!!toggleOrder && !!state.cart.length && <MyOrder />}
			</nav>
		</header>
	);
}

export { Header };
