import React from 'react';
import DropDownInfo from './DropDownInfo';

//shows the tiles on home page - part of the NumberList function
export default class ListItem extends React.Component{
	render(){
	  return (    
		  <div className="mdl-cell mdl-card mdl-color--black" style={{width:"255px"}}>
		    <div className="mdl-card__media">
			    <img id="1" className="pic" alt={this.props.film.film_name} src={this.props.film.img}/>
		    </div>
		    <div className="mdl-card__title mdl-color-text--white">  
			    <h4 className="mdl-card__title-text">{this.props.film.film_name}</h4>
			    <img id="2" height="30px" width="30px" alt={this.props.film.rating_name} className="age-rating-logo" src={this.props.film.age_rating}/>
		    </div>
		    <div className="mdl-card__supporting-text mdl-color-text--white">{this.props.film.quote}</div>
		    { this.props.film.active ? <DropDownInfo film_name={this.props.film.film_name} film_description={this.props.film.film_description}/> : ''}
		  </div>
	  );
	}
}
