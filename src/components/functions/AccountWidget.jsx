/*
* @Auther: Greg Holdich
* @Description: Created to manage swaping of account components to overlay on any page of the webapp.
*/
import React from 'react';
import Login from '../../components/pages/Login';
import Logout from '../../components/pages/Logout';
import AccountPortal from '../../components/pages/AccountPortal';
import AccountView from '../../components/pages/AccountView';
import AccountCreation from '../pages/AccountCreation';
import AccountLoading from '../pages/AccountLoading';

const AccountWidget = (props) => {
		switch(props.accountsPage) {
			case 'LOGIN':
			  return <Login 
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
							authentication={props.authentication.bind(this)}
							isAuth={props.isAuth.bind(this)}
						/>;
			case 'ACCOUNT_CREATION':
			  return <AccountCreation
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
							authentication={props.authentication.bind(this)}
							isAuth={props.isAuth.bind(this)}
						/>;
			case 'MY_ACCOUNT':
			  return <AccountPortal 
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
							username={props.username}
							isAuth={props.isAuth.bind(this)}
						/>;
			case 'VIEW_ACCOUNT':
			  return <AccountView 
							navigateTo={props.navigateTo.bind(this)}
							toggleAccountView={props.toggleAccountView.bind(this)}
							username={props.username}
							isAuth={props.isAuth.bind(this)}
						/>;
			case 'LOGOUT':
			  return <Logout
							performLogout={() => props.performLogout()}
							isAuth={props.isAuth.bind(this)}
						/>;
			case 'LOADING':
			  return <AccountLoading />;
			default:
			  return <div></div>;	
		}	
};

export default AccountWidget;
