import React from 'react';
import Login from '../../components/pages/Login';
import Logout from '../../components/pages/Logout';
import AccountCreation from '../pages/AccountCreation';
import AccountLoading from '../pages/AccountLoading';
/*
* @Auther: Greg Holdich
* @Description: Created to manage swaping of account components to overlay on any page of the webapp.
*/

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
							authentication={props.authentication.bind(this)}
						/>;
			case 'LOGOUT':
			  return <Logout
							performLogout={() => props.performLogout()}
						/>;
			case 'LOADING':
			  return <AccountLoading />;
			default:
			  return <div></div>;	
		}	
};

export default AccountWidget;
