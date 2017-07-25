/*
*	Sophie
*	Greg [Added functions for accounts system]
*/
import React from 'react';
import {Link} from 'react-router';

export default class Sitemap extends React.Component{
	
  logoutAccount() {//@Auther: Greg
    this.props.toggleAccountView('LOGOUT');
  }
  
  propagateLogin() {//@Auther: Greg
    this.props.toggleAccountView('LOGIN');
  }
  
  propagateAccountCreation() {//@Auther: Greg
    this.props.toggleAccountView('ACCOUNT_CREATION');
  }


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
		  {this.props.isAuth ?
				<li><span className="clickable-span" onClick={this.logoutAccount.bind(this)}>Logout</span></li>	
				:
				<div>
					<li><span className="clickable-span" onClick={this.propagateLogin.bind(this)}>Log in</span></li>
					<li><span className="clickable-span" onClick={this.propagateAccountCreation.bind(this)}>Sign up</span></li>
				</div>
		  }
            <li><Link to="/Forum">Forums</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
