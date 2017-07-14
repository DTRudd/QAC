import React from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  render(){
    return(
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">QA</span>
        <nav className="mdl-navigation">
          <Link to="/Films" className="pageLink mdl-navigation__link" activeClassName="active">Films</Link>
          <Link to="/FindUs" className="pageLink mdl-navigation__link" activeClassName="active">Find us</Link>
          <Link to="/Prices" className="pageLink mdl-navigation__link" activeClassName="active">Pricing</Link>
          <Link to="/FAQ" className="pageLink mdl-navigation__link" activeClassName="active">FAQs</Link>
          <Link to="/contact" className="pageLink mdl-navigation__link" activeClassName="active">Contact</Link>
          <Link to="/Booking" className="pageLink mdl-navigation__link" activeClassName="active">Booking</Link>
          <div className="mdl-layout-space"></div>
          <Link to="/Login" className="pageLink mdl-navigation__link" activeClassName="active"><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Log in/Sign up</button></Link>
        </nav>
      </div>
    );
  }
}
