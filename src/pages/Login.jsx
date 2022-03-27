import React from 'react';
import '@styles/login.scss';
import logoYardSale from '@images/logo_yard_sale.svg';
function Login() {
	return (
		<main className='login-container'>
			<img src={logoYardSale} alt='yard sale logo' className='login__logo' />
			<form action='' className='login__form'>
				<label htmlFor='email' className='login__label'>
					Email address
				</label>
				<input
					type='email'
					className='login__input'
					placeholder='user@email.example'
					id='email'
				/>
				<label htmlFor='password' className='login__label'>
					Password
				</label>
				<input
					type='password'
					className='login__input'
					placeholder='*********'
					id='password'
				/>
				<input type='submit' value='Login' className='login__button' />
				<a href='#' className='login__text'>
					Forgot my password
				</a>
			</form>
			<div className='others'>
				<a href='#' className='others__button'>
					Sign up
				</a>
			</div>
		</main>
	);
}

export { Login };
