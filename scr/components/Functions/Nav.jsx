import React from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  render(){
    return(
      <header className="mdl-layout__header" id="menu">
        <nav className="mdl-layout__header-row mdl-layout--large-screen-only">
          <IndexLink to="/" className="pageLink mdl-navigation__link" activeClassName="active">QA</IndexLink>
          <nav className="mdl-navigation">
            <Link to="/FindUs" className="pageLink mdl-navigation__link" activeClassName="active">Find us</Link>         
            <span id="info-menu-lower-left" className="mdl-js-button mdl-navigation__link">Information</span>
            <ul className="mdl-menu mdl-menu--buttom-left mdl-js-menu" htmlFor="info-menu-lower-left">
              <li><Link to="/Prices" className="pageLink mdl-menu__item" activeClassName="active">Pricing</Link></li>
              <li><Link to="/FAQ" className="pageLink mdl-menu__item" activeClassName="active">FAQs</Link></li>
              <li><Link to="/Contact" className="pageLink mdl-menu__item" activeClassName="active">Contact</Link></li>
            </ul>
            <Link to="/Booking" className="pageLink mdl-navigation__link" activeClassName="active">Booking</Link>
          </nav>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link to="/Login" className="pageLink mdl-navigation__link" activeClassName="active"><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Log in/Sign up</button></Link> 
          </nav>
        </nav>
      </header>
    );
  }
}

