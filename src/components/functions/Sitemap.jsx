import React from 'react';
import {Link} from 'react-router';

export default class Sitemap extends React.Component{

  render(){
    return(
      <div className="mdl-mega-footer mdl-color--black">
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Information</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><Link to="/Prices">Price</Link></li>
            <li><Link to="/FAQ">FAQs</Link></li>
            <li><Link to="/Contact">Contact us</Link></li>
            <li><Link to="/FindUs">Find us</Link></li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Cinemas</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Films">Films</Link></li>
            <li><Link to="/Booking">Bookings</Link></li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Account Features</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><Link to="/Login">Log in</Link></li>
            <li><Link to="/Forum">Forums</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
