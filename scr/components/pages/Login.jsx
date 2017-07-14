import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
	<div id="account-box">
		<div className="mdl-layout mdl-js-layout">
			<main className="mdl-layout__content">
				<div className="mdl-card mdl-shadow--6dp">
					<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
						<h2 className="mdl-card__title-text">Login</h2>
					</div>
				<div className="mdl-card__supporting-text">
						<form action="#">
							<div className="mdl-textfield mdl-js-textfield">
								<input className="mdl-textfield__input" placeholder="Username" type="text" id="username" />
							</div>
							<div className="mdl-textfield mdl-js-textfield">
								<input className="mdl-textfield__input" placeholder="Password" type="password" id="userpass" />
							</div>
						</form>
					</div>
					<div className="mdl-card__actions mdl-card--border">
						<span><button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button></span>
						<span className="account_link" ><Link to="/AccountCreation">Not already registered?</Link></span>
					</div>
				</div>
			</main>
		</div>
	</div>
    );
  }
}
