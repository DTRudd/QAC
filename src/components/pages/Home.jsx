import React from 'react';
import films from '../../json/films.json';
import NumberList from '../functions/NumberList'

import Carousel from './../functions/Carousel';

export default class Home extends React.Component {
  
  constructor(){
    super();
    this.state={
      films:[]
    }
  }
  
  //code to sort info from JSON file.
  componentWillMount() {
    this.getInfo();
  }
  
  getInfo(){
    var myFilmList = films;
    this.setState({films: myFilmList.films});
  }

  render() {
    return (
      <div>
        <div id="carousel">
          <Carousel />
        </div>
        <div className="mdl-color--grey-700">
          <NumberList films={this.state.films} />
        </div>
      </div>
    );
  }
}
