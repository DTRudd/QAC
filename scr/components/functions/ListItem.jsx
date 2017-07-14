import React from 'react';
import DropDownInfo from './../functions/DropDownInfo';

//shows the tiles on home page - part of the NumberList function

export default class ListItem extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			isActive:false
		}
	}
	
  
  onSelect(){
	  this.setState({isActive: !this.state.isActive});
  }
  
	render(){
	  return (    
		<div className="mdl-cell mdl-card" style={{width:"255px"}} onClick={this.onSelect.bind(this)}>
		  <div className="mdl-card__media">
			<img id="1" className="pic"  src={this.props.film.img}/>
		  </div>
		  <div className="mdl-card__title">  
			<h4 className="mdl-card__title-text">{this.props.film.film_name}</h4>
			<img id="2" height="30px" width="30px" className="age-rating-logo" src={this.props.film.age_rating}/>
		  </div>
		  <div className="mdl-card__supporting-text">{this.props.film.quote}</div>
		  
		  { this.state.isActive ? <DropDownInfo film_name={this.props.film.film_name} film_description={this.props.film.film_description}/> : ''}
		</div>
	  );
	}
}

