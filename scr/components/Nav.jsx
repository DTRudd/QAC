import React from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  render(){
    return(
      <header className="mdl-layout__header" id="menu">
        <nav className="mdl-layout__header-row">
          <h1 className="mdl-layout-title">QA Cinemas</h1>
          <nav className="mdl-navigation">
            <IndexLink to="/" className="pageLink mdl-navigation__link" activeClassName="active">Home</IndexLink>
            <Link to="/FindUs" className="pageLink mdl-navigation__link" activeClassName="active">Find us</Link>
            <Link to="/Booking" className="pageLink mdl-navigation__link" activeClassName="active">Booking</Link>
            <span id="info-menu-lower-left" className="mdl-js-button mdl-navigation__link">Information</span>
            <ul className="mdl-menu mdl-menu--buttom-left mdl-js-menu" htmlFor="info-menu-lower-left">
              <li><Link to="/Info" className="pageLink mdl-menu__item" activeClassName="active">Information</Link></li>
              <li><Link to="/FAQ" className="pageLink mdl-menu__item" activeClassName="active">FAQs</Link></li>
              <li><Link to="/Contact" className="pageLink mdl-menu__item" activeClassName="active">Contact</Link></li>
            </ul>
            <Link to="/Films" className="pageLink mdl-navigation__link" activeClassName="active">Films</Link>
            <Link to="/Login" className="pageLink mdl-navigation__link" activeClassName="active"><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Log in</button></Link>
          </nav>
        </nav>
      </header>
    );
  }
}
