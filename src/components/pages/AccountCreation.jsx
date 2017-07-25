/*
*	@Auther: Greg
*	@Description: Component for handling user account creation, this component will overlay the page it is called upon.
*/
import React, { Component } from 'react';

import apiConnect from '../../api/apiConnect';

export default class AccountCreation extends Component {
	constructor() {
		super();
		this.state = {
			uname: '',
			email: '',
			userpass: '',
			userpass_retype: '',
			error: ''
		}
		
	}
	
	componentWillMount() {
		if(this.props.isAuth()) {
			this.props.navigateTo('MY_ACCOUNT');
		}
	}
	
	closeAccounts(action) {
		this.props.toggleAccountView(action);
	}
	
	navigateAccounts(action) {
		this.props.navigateTo(action);
	}
	
  handleChange(e) {
	  this.setState({
				[e.target.name]: e.target.value
	  });
  }
	
  authoriseAccountCreation(e) {
	  const { uname, email, userpass, userpass_retype } = this.state;
	  
	  if(uname.trim().length > 0 && email.trim().length > 0 && 
		userpass.trim().length > 0 && userpass_retype.trim().length > 0) {
	  
	  if(userpass === userpass_retype) {
		  const dateTime = Date.now(),
				date = new Date(dateTime).toUTCString(),
				username = uname.toLowerCase(),
				emailAdd = email.toLowerCase(),
			data = {
				username: username,
				email: emailAdd,
				password: userpass,
				date: date
			},
			formBody = Object.keys(data)
							 .map(key=>encodeURIComponent(key)+'='+encodeURIComponent(data[key]))
							 .join('&');
				
		  apiConnect.createAccount(formBody, createAuth => {
			  if(createAuth.message && createAuth.message === 'Account successfully created!') {
				  apiConnect.fetchAccounts(username, userpass, dateTime, auth => {
					  if(auth.sessionId && auth.session) {
						  if(auth.session.datetime === dateTime && auth.session.username === username) {
							  this.props.authentication(auth.sessionId, auth.session.datetime, auth.session.username, auth.session.expires);
						  }
					  }
				  });
			  } else if(createAuth.error) {
				this.setState({
					error: createAuth.error
				}); 
			  }
		  });
	  } else {
		  this.setState({
			error: 'Passwords do not match!'
		  });
	  }
	  } else {
		  this.setState({
			error: 'Please complete all fields!'
		  });
	  }
	  e.preventDefault();
	  
  }
	
	render() {
		const { uname, email, userpass, userpass_retype } = this.state;
		return(
			<div id="account-box">
				<div className="mdl-layout mdl-js-layout">
					<main className="mdl-layout__content">
						<div className="mdl-card mdl-shadow--6dp">
							<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
								<h2 className="mdl-card__title-text">Create an account</h2>
								<span className="accountClose" onClick={() => this.closeAccounts('CLOSE')}>X</span>
							</div>
							{this.state.error.trim().length > 0 ? <span className="account_error">{this.state.error}</span> : ''}
						<form onSubmit={this.authoriseAccountCreation.bind(this)}>
						  <div className="mdl-card__supporting-text">
									<div className="mdl-textfield mdl-js-textfield">
										<input className="mdl-textfield__input" placeholder="Username" type="text" id="username" name="uname" value={uname} onChange={this.handleChange.bind(this)} />
									</div>
									<div className="mdl-textfield mdl-js-textfield">
										<input className="mdl-textfield__input" placeholder="Email" type="text" id="email" name="email" value={email} onChange={this.handleChange.bind(this)} />
									</div>
									<div className="mdl-textfield mdl-js-textfield">
										<input className="mdl-textfield__input" placeholder="Password" type="password" id="userpass" name="userpass" value={userpass} onChange={this.handleChange.bind(this)} />
									</div>
									<div className="mdl-textfield mdl-js-textfield">
										<input className="mdl-textfield__input" placeholder="Retype password" type="password" id="userpass_retype" name="userpass_retype" value={userpass_retype} onChange={this.handleChange.bind(this)} />
									</div>
							</div>
							<div className="mdl-card__actions mdl-card--border">
								<span><button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit" name="submit">Create account</button></span>
								<span className="account_link" onClick={() => this.navigateAccounts('LOGIN')}>Already got an account? Login</span>
							</div>
						</form>
						</div>
					</main>
				</div>
			</div>
		);
	}
}
