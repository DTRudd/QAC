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
					  this.setState({
								userSession: {
										sessionID: id,
										dateTime: datetime,
										username: uname,
										expires
								},
								authenticated: true,
								loading: false
					  });
					setTimeout(() => this.toggleAccountsPage(''), 500);
				}
			  
			}
		});
  }
  
  authenticateLogin(sessionID, dateTime, username, expires) {//@Auther: Greg
    if(cookie.load('QAC_user-'+username) === sessionID+dateTime) {
      apiConnect.fetchSession(sessionID, session => {
        if(session.status === "OK") {
          this.setState({
            userSession: {
              sessionID,
              dateTime,
              username,
              expires
            },
            authenticated: true,
            loading: false
          });
          setTimeout(() => this.toggleAccountsPage(''), 500);
        }
      });
    }    
  }
  
  //code to sort info from JSON file.
  componentWillMount() {
	if(this.isAuthenticated() === false) {
		this.toggleAccountsPage('LOADING');
		this.authenticateSession();
	}
    this.getInfo();
  }
  
  componentDidMount() {//@Auther: Greg
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
  
  loading() {
    return(
      <div className="loading-outer">
        <div className="loading-inner">
          Loading...
        </div>
      </div>
    );
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
        {displayAccountPage ? <AccountWidget accountsPage={accountPage} navigateTo={this.inlineNavigate.bind(this)} toggleAccountView={this.toggleAccountsPage.bind(this)} authentication={this.authenticateLogin.bind(this)} /> : ''}
      </div>
    );
  }
}
