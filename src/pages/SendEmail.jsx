import React from 'react';
import '../styles/SendEmail.scss';
function SendEmail() {
	return (
		<main className='email-sent'>
			<div className='email-sent__container'>
				<img
					src='../img/logo_yard_sale.svg'
					alt='logo yard sale'
					className='email-sent__logo'
				/>
				<h1 className='email-sent__title'>Email has been sent!</h1>
				<p className='email-sent__subtitle'>
					Please check your inbox for instructions on how to reset the password
				</p>
				<div className='email-sent__content'>
					<div className='email-sent__logo-env-container'>
						<img
							src='../icons/email.svg'
							alt='logo envelope'
							className='email-sent__logo--envelope'
						/>
					</div>
					<input type='button' value='Login' className='email-sent__button' />
					<p>
						Didn't receive the email? <a href='#'> Resend</a>
					</p>
				</div>
			</div>
		</main>
	);
}
export { SendEmail };
