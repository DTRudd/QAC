//Michael Green

import React, { Component } from 'react';
//import films from '../../json/Films_All.json';
import FilmPageList from '../functions/FilmPageList';

import apiConnect from '../../api/apiConnect.js';

export default class Films extends Component {
   
  constructor(){
    super();
    this.state={
      films:[],
    }
  }
  
  componentDidMount() {
	console.log("component did mount");
	var result = apiConnect.getFilms();
	this.setState(films : result);
	this.getInfo();
	console.log("end of did mount")
  }
  
  //code to sort info from JSON file.
  /*
  componentWillMount() {
    this.getInfo();
  }
*/
  getInfo(){
    var myFilmList = films;
    this.setState({films: myFilmList.films_All});
  }

  render() {
    return (
      <div className="mdl-color--grey-700">
        <FilmPageList films={this.state.films} />
      </div>
    );
  }
}
