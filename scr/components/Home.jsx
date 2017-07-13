import React from 'react';
import filmsList from './../../res/Films.json';
import NumberList from './NumberList'

export default class Home extends React.Component {
	
	constructor(){
		super();
		this.state={
			ids:[],
			titles:[],
			ageRating:[],
			pic:[],
		}
	}
	
	//code to sort info from JSON file.
	componentDidMount() {
		this.getInfo();
	}
	
	getInfo(){
		var myFilmList = filmsList;
		
		var idArray =[];
		var titleArray =[];
		var ageRatingArray=[];
		var picArray=[];
		
		for(let i=0; i<myFilmList.films.length; i++){ 
			idArray.push(myFilmList.films[i].id);
			titleArray.push(myFilmList.films[i].Film_Name);
			ageRatingArray.push(myFilmList.films[i].age_rating);
			picArray.push(myFilmList.films[i].img);
		}
		
		this.setState({ids: idArray});
		this.setState({titles: titleArray});
		this.setState({ageRating: ageRatingArray});
		this.setState({pic: picArray});
	}

  render() {
    return (
	
	<div>
      <h2>Home</h2>
	  <NumberList numbers={this.state.ids} titles={this.state.titles} 
		ageRating={this.state.ageRating} pic={this.state.pic}/>
	</div>
	);
  }
}