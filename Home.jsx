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
			img:[],
			arrayLength:0,
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
		var imgArray=[];
		for(let i=0; i<myFilmList.films.length; i++){ 
			idArray.push(myFilmList.films[i].id);
			titleArray.push(myFilmList.films[i].Film_Name);
			ageRatingArray.push(myFilmList.films[i].age_rating);
			imgArray.push(myFilmList.films[i].img);
		}
		this.setState({ids: idArray});
		this.setState({titles: titleArray});
		this.setState({ageRating: ageRatingArray});
		this.setState({img: imgArray});
	}

  render() {
    return (
	
	<div>
      <h2>Home</h2>
	  <NumberList numbers={this.state.ids} titles={this.state.titles} 
		ageRating={this.state.ageRating} img={this.state.img}/>
	</div>
	);
  }
}