import React from 'react';
import films from './../../../res/Films_All.json';
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
		<h4> Films page </h4>
        <NumberList films={this.state.films} />
      </div>
    );
  }
}
