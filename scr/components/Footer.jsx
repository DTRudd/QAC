import React from 'react';
import {Link} from 'react-router';
export default class Footer extends React.Component{

  render(){
    return(
      <footer className="mdl-mega-footer">
        <div className="mdl-mega-footer__drop-down-section">
          <div className="mdl-mega-footer__heading">QA Cinemas</div>
          <ul className="mdl-mega-footer__link-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Films">Films</Link></li>
            <li><Link to="/FindUs">Find us</Link></li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <div className="mdl-mega-footer__heading">Information</div>
          <ul className="mdl-mega-footer__link-list">
            <li><Link to="/Prices">Prices</Link></li>
            <li><Link to="/FAQ">FAQs</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <div className="mdl-mega-footer__heading">Account</div>
          <ul className="mdl-mega-footer__link-list">
            <li><Link to="/Login">Log In</Link></li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <div className="mdl-mega-footer__heading">Contact</div>
          <ul className="mdl-mega-footer__link-list">
            <li>Email : <a href="mailto:cinema@email.co.uk">cinema@email.co.uk</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}
