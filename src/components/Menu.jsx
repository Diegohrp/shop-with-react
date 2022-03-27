import React from 'react';
import '@styles/Menu.scss';
function Menu() {
	return (
		<ul class='menu-desktop'>
			<div>
				<li>
					<a href='#'>My orders</a>
				</li>
				<li>
					<a href='#'>My account</a>
				</li>
			</div>
			<li class='menu-desktop__sign-out'>Sign out</li>
		</ul>
	);
}

export { Menu };
