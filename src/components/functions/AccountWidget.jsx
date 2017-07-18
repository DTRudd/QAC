import React from 'react';
import Login from '../../components/pages/Login';
import AccountCreation from '../../components/pages/AccountCreation';

const AccountWidget = (props) => {
		switch(props.accountsPage) {
			case 'LOGIN':
			  return <Login 
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
						/>;
			case 'ACCOUNT_CREATION':
			  return <AccountCreation
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
						/>;
			default:
			  return <div></div>;	
		}	
};

export default AccountWidget;