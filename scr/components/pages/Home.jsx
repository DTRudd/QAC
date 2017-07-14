import React from 'react';
import filmsList from './../../../res/films.json';
import NumberList from './../functions/NumberList'

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
    var myFilmList = filmsList;
    this.setState({films: myFilmList.films});
  }

  render() {
    return (
      <div>
	  <h1>--Carosel goes here--</h1>
        <NumberList films={this.state.films}/>
      </div>
    );
  }
}
