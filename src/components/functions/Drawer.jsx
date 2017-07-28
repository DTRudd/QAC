//Sophie
import React from 'react';
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
      <div className="mdl-layout__drawer mdl-color--black mdl-color-text--white">
        <nav className="mdl-navigation">
          <Link to="/" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">QA</Link>
          <Link to="/Films" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Films</Link>
          <Link to="/FindUs" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Find us</Link>
          <Link to="/Prices" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Pricing</Link>
          <Link to="/FAQ" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">FAQs</Link>
          <Link to="/contact" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Contact</Link>
          <Link to="/Booking" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Booking</Link>
		  <Link to="/Forum" className="pageLink mdl-navigation__link mdl-color-text--white" activeClassName="active">Forums</Link>
          <div className="mdl-layout-space"></div>
          <span className="pageLink mdl-navigation__link mdl-color-text--white">
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
      </div>
    );
  }
}
