import React from 'react';
<<<<<<< HEAD
import filmsList from './../../../res/films.json';
=======
import films from './../../../res/Films_All.json';
>>>>>>> origin/Michael
import NumberList from './../functions/NumberList';

export default class Home extends React.Component {
   
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
        <h1> Films page - showing all films available</h1>
        <NumberList films={this.state.films} />
      </div>
    );
  }
}
