import React from 'react';

export default class Sitemap extends React.Component{
<<<<<<< HEAD
	
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
=======
  
  render(){
    return(
      <div className="mdl-mega-footer">
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Information</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>Price</li>
            <li>FAQ</li>
            <li>Contacts</li>
            <li>Find us</li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Cinemas</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>Home</li>
            <li>Films</li>
            <li>Bookings</li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Account Features</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>Log in</li>
          </ul>
        </div>
      </div>
    );
  }
}
>>>>>>> dae1b671f40579f5712a936b2d5d657c26faf1dd
