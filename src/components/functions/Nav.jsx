/*
*	Sophie
*	Greg [Added functions for accounts system]
*/

import React from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  
  logoutAccount() {//@Auther: Greg
    this.props.toggleAccountView('LOGOUT');
  }
  
  propagateLogin() {//@Auther: Greg
    this.props.toggleAccountView('LOGIN');
  }
  
  propagateMyAccount() {//@Auther: Greg
	this.props.toggleAccountView('MY_ACCOUNT');  
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
			  <div className="dropdown">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
					<i className="material-icons">account_circle</i><span className="userText">{this.props.username}</span><img src="/img/arrow-down.png" alt="Dropdown arrow" />
                </button>
				<ul className="dropdown-menu">
				  <li className="user-item" onClick={this.propagateMyAccount.bind(this)}><i className="material-icons">supervisor_account</i> My Account</li>
				  <li className="user-item" onClick={this.logoutAccount.bind(this)}><i className="material-icons">exit_to_app</i> Logout</li>
				</ul>
			</div>
              :
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.propagateLogin.bind(this)}>
					Log in
                </button>
              }            
            </span> 
          </nav>
        </nav>
      </header>
    );
  }
}
