import React, { Component } from 'react';
import films from '../../json/Films_All.json';
import NumberList from '../functions/NumberList';
import FilmPageList from '../functions/FilmPageList';
export default class Films extends Component {
   
  constructor(){
    super();
    this.state={
      films:[],
    }
  }
  
  //code to sort info from JSON file.
  componentWillMount() {
    this.getInfo();
  }
  
  getInfo(){
    var myFilmList = films;
    this.setState({films: myFilmList.films_All});
  }

  render() {
    return (
      <div>
        <FilmPageList films={this.state.films} />
      </div>
    );
  }
}
