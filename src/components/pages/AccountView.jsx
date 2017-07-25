/*
*	@Auther: Greg
*	@Description: Component for viewing account infomation.
*/

import React, { Component } from 'react';

export default class AccountView extends Component {
	
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
      <div id="account-box" className="view_account">
			<div className="user-card-wide mdl-card mdl-shadow--2dp">
			  <div className="mdl-card__title">
				<h2 className="mdl-card__title-text">View Account(<div className="uname_text">{this.props.username}</div>)</h2>
				<span className="accountClose" onClick={() => this.closeAccounts()}>X</span>
			  </div>
			  
				<table className="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
				  <tbody>
					<tr>
					  <td className="mdl-data-table__cell--non-numeric">Username:</td>
					  <td className="mdl-data-table__cell--non-numeric">{this.props.username}</td>
					</tr>
					<tr>
					  <td className="mdl-data-table__cell--non-numeric">Email:</td>
					  <td className="mdl-data-table__cell--non-numeric">example@example.com(Not Complete)</td>
					</tr>
				  </tbody>
				</table>

			  <div className="mdl-card__actions mdl-card--border">
				<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={() => this.navigateAccounts('MY_ACCOUNT')}>
				  Back
				</a>
			  </div>
			</div>
      </div>
    );
  }
}
