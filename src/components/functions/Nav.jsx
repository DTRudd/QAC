import React from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  
  logoutAccount() {
    this.props.toggleAccountView('LOGOUT');
  }
  
  propagateAccounts() {
    this.props.toggleAccountView('LOGIN');
  }
  
  render(){
    return(
      <header className="mdl-layout__header mdl-color--grey-900" id="menu">
        <nav className="mdl-layout__header-row mdl-layout--large-screen-only">
          <IndexLink to="/" className="pageLink mdl-navigation__link" activeClassName="active">QA</IndexLink>
          <nav className="mdl-navigation">
            <Link to="/Films" className="pageLink mdl-navigation__link" activeClassName="active">Films</Link> 
            <Link to="/FindUs" className="pageLink mdl-navigation__link" activeClassName="active">Find us</Link>         
            <span id="info-menu-lower-left" className="mdl-js-button mdl-navigation__link">Information</span>
            <ul className="mdl-menu mdl-menu--buttom-left mdl-js-menu" htmlFor="info-menu-lower-left">
              <li><Link to="/Prices" className="pageLink mdl-menu__item" activeClassName="active">Pricing</Link></li>
              <li><Link to="/FAQ" className="pageLink mdl-menu__item" activeClassName="active">FAQs</Link></li>
              <li><Link to="/Contact" className="pageLink mdl-menu__item" activeClassName="active">Contact</Link></li>
            </ul>

            <Link to="/Forum" className="pageLink mdl-navigation__link" activeClassName="active">Forum</Link>

          </nav>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <span id="account_NavButton">
              {this.props.isAuth ? 
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" onClick={this.logoutAccount.bind(this)}>
                  Logout
                </button>
              :
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" onClick={this.propagateAccounts.bind(this)}>
                  Log in/Sign up
                </button>
              }            
            </span> 
          </nav>
        </nav>
      </header>
    );
  }
}
