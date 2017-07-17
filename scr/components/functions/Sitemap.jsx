import React from 'react';

export default class Sitemap extends React.Component{

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
