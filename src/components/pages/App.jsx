import React from 'react';
import Nav from '../functions/Nav';
import Footer from '../functions/Footer';
import Drawer from '../functions/Drawer';
import Sitemap from '../functions/Sitemap';
import AccountWidget from '../functions/AccountWidget'

import filmsList from '../../json/films.json';
import locsList from '../../json/Locations.json';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      films:[],
      locations:[],
	  displayAccountPage: false,
	  accountPage: ''
    }
  }
  
  //code to sort info from JSON file.
  componentWillMount() {
    this.getInfo();
  }
  
  getInfo(){
    var myFilmList = filmsList.films;
    this.setState({films:myFilmList});
    var myLocsList = locsList.Location;
    this.setState({locations:myLocsList});
  }
  
  toggleAccountsPage(accountsPage) {
	  this.setState({
		displayAccountPage: !this.state.displayAccountPage,
		accountPage: accountsPage
	  });
  }
  
  inlineNavigate(accountsPage) {
	  this.setState({
		accountPage: accountsPage
	  });
  }

  render() {
	const { films, locations, displayAccountPage, accountPage } = this.state;
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
        <Nav toggleAccountView={this.toggleAccountsPage.bind(this)} />
        <Drawer />
        <div className="mdl-layout__content page-content">{this.props.children}<Sitemap /></div>
        <Footer films={films} locations={locations}/>
		{displayAccountPage ? <AccountWidget accountsPage={accountPage} navigateTo={this.inlineNavigate.bind(this)} toggleAccountView={this.toggleAccountsPage.bind(this)} /> : ''}
      </div>
    );
  }
}
