/*
*	@Auther: Greg
*	@Description: Component for managing user account, setting preferences and editing account infomation.
*/

import React, { Component } from 'react';

import apiConnect from '../../api/apiConnect';

export default class AccountPortal extends Component {
	
	componentWillMount() {
		if(!this.props.isAuth()) {
			this.props.navigateTo('LOGIN');
		}
	}
	
  
  closeAccounts() {
    this.props.toggleAccountView('CLOSE');
  }
  
  navigateAccounts(action) {
    this.props.navigateTo(action);
  }
  
  render() {
    return (
      <div id="account-box" className="my_account">
			<div className="user-card-wide mdl-card mdl-shadow--2dp">
			  <div className="mdl-card__title">
				<h2 className="mdl-card__title-text">Welcome back <div className="uname_text">{this.props.username}</div>!</h2>
				<span className="accountClose" onClick={() => this.closeAccounts()}>X</span>
			  </div>
			  <div className="user-card-square mdl-shadow--2dp">
				  <div className="mdl-card__title accounts-block mdl-card--expand"  onClick={() => this.props.navigateTo('VIEW_ACCOUNT')}>
						View Account
						<i className="material-icons">chevron_right</i>
				  </div>
			  </div>
			  <div className="user-card-square mdl-shadow--2dp">
				  <div className="mdl-card__title accounts-block mdl-card--expand">
						Set Preferences
						<i className="material-icons">chevron_right</i>
				  </div>
			  </div>
			  <div className="mdl-card__actions mdl-card--border">
				<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={() => this.closeAccounts()}>
				  Close
				</a>
			  </div>
			</div>
      </div>
    );
  }
}