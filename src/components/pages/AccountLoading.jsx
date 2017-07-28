/*
*	@Auther: Greg
*	@Description: Component to display loading gif, for when asynchronous data transfers are performing.
*				  In relation to the accounts system. This components is swapped out once the data is
*				  recieved and validation has occurred.
*/
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
