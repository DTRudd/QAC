import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  render(){
    return(
      <div className="mdl-layout__drawer mdl-color--black mdl-color-text--white">
        <nav className="mdl-navigation">
          <Link to="/" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">QA</Link>
          <Link to="/Films" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Films</Link>
          <Link to="/FindUs" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Find us</Link>
          <Link to="/Prices" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Pricing</Link>
          <Link to="/FAQ" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">FAQs</Link>
          <Link to="/contact" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Contact</Link>
          <div className="mdl-layout-space"></div>
          <Link to="/Login" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active"><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500 mdl-color-text--white">Log in/Sign up</button></Link>
        </nav>
      </div>
    );
  }
}
