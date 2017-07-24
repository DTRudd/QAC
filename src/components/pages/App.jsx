import React from 'react';
import Nav from '../functions/Nav';
import Footer from '../functions/Footer';
import Drawer from '../functions/Drawer';
import Sitemap from '../functions/Sitemap';
import AccountWidget from '../functions/AccountWidget'

import filmsList from '../../json/films.json';
import locsList from '../../json/Locations.json';
import apiConnect from '../../api/apiConnect';
import cookie from 'react-cookies';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      films:[],
      locations:[],
	  userSession: {
				sessionID: '',
				dateTime: '',
				username: '',
				expires: 0
			},
	  authenticated: false,
	  displayAccountPage: false,
	  accountPage: '',
    }
  }
  
  isAuthenticated() {//@Auther: Greg
    return this.isAuthExpired() === false && this.state.authenticated === true ? true : false;
  }
  
  isAuthExpired() {//@Auther: Greg
   return this.state.userSession.expires <= Date.now() ? true : false;
  }
  
  authenticateSession() {//@Auther: Greg
		apiConnect.findSession(session => {
			if(session.status === "OK") {
				const { id, uname, datetime, expires } = session.session;
				if(cookie.load('QAC_user-'+uname) === id+datetime) {
					this.toggleAccountsPage('LOADING');
					  this.setState({
								userSession: {
										sessionID: id,
										dateTime: datetime,
										username: uname,
										expires
								},
								authenticated: true
					  });
					setTimeout(() => this.toggleAccountsPage(''), 600);
				}
			  
			}
		});
  }
  
  authenticateLogin(sessionID, dateTime, username, expires) {//@Auther: Greg
    if(cookie.load('QAC_user-'+username) === sessionID+dateTime) {
      apiConnect.fetchSession(sessionID, session => {
        if(session.status === "OK") {
		  this.inlineNavigate('LOADING');
          this.setState({
            userSession: {
              sessionID,
              dateTime,
              username,
              expires
            },
            authenticated: true
          });
          setTimeout(() => this.toggleAccountsPage(''), 300);
        }
      });
    }    
  }
  
  performLogout() {//@Auther: Greg
	const { userSession, authenticated } = this.state;
	
	if(authenticated) {
  		if(cookie.load('QAC_user-'+userSession.username) === userSession.sessionID+userSession.dateTime) {
			apiConnect.processLogout(session => {
				if(session.status === "OK") {
				this.inlineNavigate('LOADING');
				cookie.remove('QAC_user-'+userSession.username, userSession.sessionID+userSession.dateTime, { path: '/' });
					this.setState({
							userSession: {
							sessionID: '',
							dateTime: '',
							username: '',
							expires: 0
							},
						authenticated: false
					  });
					setTimeout(() => this.toggleAccountsPage(''), 600);
				}
			});
		}
	} 
  }
  
  componentWillMount() {//@Auther: Greg
	if(this.isAuthenticated() === false) {
		this.authenticateSession();
	}
    this.getInfo();  //code to sort info from JSON file.
  }
    
  
  getInfo(){
    this.setState({
				locations:locsList.Location,
				films:filmsList.films
			});
  }
  
  toggleAccountsPage(accountsPage) {//@Auther: Greg
    this.setState({
      displayAccountPage: !this.state.displayAccountPage,
      accountPage: accountsPage
    });
  }
  
  inlineNavigate(accountsPage) {//@Auther: Greg
    this.setState({
      accountPage: accountsPage
    });
  }
  

  render() {
    const { films, locations, displayAccountPage, accountPage } = this.state;
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
        <Nav toggleAccountView={this.toggleAccountsPage.bind(this)} isAuth={this.isAuthenticated()} />
        <Drawer />
        <div className="mdl-layout__content page-content mdl-color--black">
          <div>
            {this.props.children}
          </div>
          <div>
            <Sitemap />
          </div>
        </div>
        <Footer films={films} locations={locations}/>
        {displayAccountPage ? <AccountWidget accountsPage={accountPage} navigateTo={this.inlineNavigate.bind(this)} toggleAccountView={this.toggleAccountsPage.bind(this)} authentication={this.authenticateLogin.bind(this)} performLogout={this.performLogout.bind(this)} /> : ''}
      </div>
    );
  }
}
