import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
	<div id="login-box">
		<div className="mdl-layout mdl-js-layout mdl-color--grey-100">
			<main className="mdl-layout__content">
				<div className="mdl-card mdl-shadow--6dp">
					<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
						<h2 className="mdl-card__title-text">Login</h2>
					</div>
				<div className="mdl-card__supporting-text">
						<form action="#">
							<div className="mdl-textfield mdl-js-textfield">
								<input className="mdl-textfield__input" type="text" id="username" />
								<label className="mdl-textfield__label" htmlFor="username">Username</label>
							</div>
							<div className="mdl-textfield mdl-js-textfield">
								<input className="mdl-textfield__input" type="password" id="userpass" />
								<label className="mdl-textfield__label" htmlFor="userpass">Password</label>
							</div>
						</form>
					</div>
					<div className="mdl-card__actions mdl-card--border">
						<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button>
					</div>
				</div>
			</main>
		</div>
	</div>
    );
  }
}
