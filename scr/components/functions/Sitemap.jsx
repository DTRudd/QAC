import React from 'react';

export default class Sitemap extends React.Component{
	
	render(){
		return(
			<div>
				<ul className="sitemap-footer-list">
					<li>Home</li>
					<li>Films</li>
					<li>Find us</li>
					<li>Information
						<ul className="footer-sub-list">
							<li>Price</li>
							<li>FAQ</li>
							<li>Contacts</li>
						</ul>
					</li>
					<li>Bookings</li>
					<li>LogIn</li>
				</ul>
			</div>
		);
	}
}