import React, { Component } from 'react';

export default class AccountLoading extends Component {
    
  render() {
    return (
      <div id="account-box">
			<div className="account-loading">
			      <main className="mdl-layout__content">
					<div className="mdl-card mdl-shadow--6dp">
					  <div>
							<img src="/img/loading.gif" alt="Loading..." />
					  </div>
					</div>
				  </main>
			</div>
      </div>
    );
  }
}
