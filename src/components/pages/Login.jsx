/*
*	@Auther: Greg
*	@Description: Component for handling user login, this component will overlay the page it is called upon.
*/

import React, { Component } from 'react';

import apiConnect from '../../api/apiConnect';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			uname: '',
			pass: ''
		}
		
	}
  
  closeAccounts() {
    this.props.toggleAccountView('CLOSE');
  }
  
  navigateAccounts(action) {
    this.props.navigateTo(action);
  }
  
  handleChange(e) {
	  this.setState({
				[e.target.name]: e.target.value
	  });
  }
  
  authoriseLogin(e) {
	  const { uname, pass } = this.state;
	  const username = uname.toLowerCase();
	  const dateTime = Date.now();
	  apiConnect.fetchAccounts(username, pass, dateTime, auth => {
		  if(auth.sessionId && auth.session) {
			  if(auth.session.datetime === dateTime && auth.session.username === username) {
				  this.props.authentication(auth.sessionId, auth.session.datetime, auth.session.username, auth.session.expires);
			  }
		  }
	  });
	  e.preventDefault();
  }
  
  
  
  render() {
	const { uname, pass } = this.state;
    return (
      <div id="account-box">
        <div className="mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">
            <div className="mdl-card mdl-shadow--6dp">
              <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                <h2 className="mdl-card__title-text">Login</h2>
                <span className="accountClose" onClick={() => this.closeAccounts()}>X</span>
              </div>
			  <form onSubmit={this.authoriseLogin.bind(this)}>
              <div className="mdl-card__supporting-text">
                  <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" placeholder="Username" type="text" id="username" name="uname" value={uname} onChange={this.handleChange.bind(this)} />
                  </div>
                  <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" placeholder="Password" type="password" id="userpass" name="pass" value={pass} onChange={this.handleChange.bind(this)} />
                  </div>
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <span><button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit" name="submit">Log in</button></span>
                <span className="account_link" onClick={() => this.navigateAccounts('ACCOUNT_CREATION')}>Create an account?</span>
              </div>
			 </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
