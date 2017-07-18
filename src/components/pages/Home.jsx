import React from 'react';
import films from '../../json/films.json';
import NumberList from '../functions/NumberList'

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
        <h1>--Carosel goes here-- only show new films</h1>
        <NumberList films={this.state.films}/>
      </div>
    );
  }
}