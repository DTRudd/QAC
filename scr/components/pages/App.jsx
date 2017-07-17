import React from 'react';
import Nav from './../functions/Nav';
import Footer from './../functions/Footer';
import Drawer from './../functions/Drawer';
import NumberList from './../functions/NumberList'
import filmsList from './../../../res/Films.json';
import Sitemap from './../functions/Sitemap';
import locsList from './../../../res/Locations.json';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      films:[],
      locations:[]
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

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
        <Nav />
        <Drawer />
        <div className="mdl-layout__content page-content">{this.props.children}<Sitemap /></div>
        <Footer films={this.state.films} locations={this.state.locations}/>
      </div>
    );
  }
}
