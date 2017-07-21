import React from 'react';
import Login from '../../components/pages/Login';
import AccountCreation from '../pages/AccountCreation';
import AccountLoading from '../pages/AccountLoading';
const AccountWidget = (props) => {
		switch(props.accountsPage) {
			case 'LOGIN':
			  return <Login 
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
							authentication={props.authentication.bind(this)}
						/>;
			case 'ACCOUNT_CREATION':
			  return <AccountCreation
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
						/>;
			case 'LOADING':
			  return <AccountLoading 
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
						/>;
			default:
			  return <div></div>;	
		}	
};

export default AccountWidget;
