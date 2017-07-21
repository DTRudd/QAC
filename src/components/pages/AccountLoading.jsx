import React, { Component } from 'react';

export default class AccountLoading extends Component {
  
  closeAccounts() {
    this.props.toggleAccountView('CLOSE');
  }
  
  navigateAccounts(action) {
    this.props.navigateTo(action);
  }
  
  render() {
    return (
      <div id="account-box">
			<div className="account-loading">
			      <main className="mdl-layout__content">
					<div className="mdl-card mdl-shadow--6dp">
					  <div>
							Loading...
					  </div>
					</div>
				  </main>
			</div>
      </div>
    );
  }
}
