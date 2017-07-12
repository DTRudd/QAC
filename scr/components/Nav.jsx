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
            <Link to="/Index1" className="pageLink mdl-navigation__link" activeClassName="active">Index Page</Link>
            <Link to="/Index2" className="pageLink mdl-navigation__link" activeClassName="active">Index</Link>
            <Link to="/FindUs" className="pageLink mdl-navigation__link" activeClassName="active">Find us</Link>
            <Link to="/Booking" className="pageLink mdl-navigation__link" activeClassName="active">Booking</Link>
            <Link to="/FAQ" className="pageLink mdl-navigation__link" activeClassName="active">FAQs</Link>
            <Link to="/Films" className="pageLink mdl-navigation__link" activeClassName="active">Films</Link>
            <Link to="/Info" className="pageLink mdl-navigation__link" activeClassName="active">Information</Link>
            <Link to="/Login" className="pageLink mdl-navigation__link" activeClassName="active"><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Log in</button></Link>
          </nav>
        </nav>
      </header>
    );
  }
}
