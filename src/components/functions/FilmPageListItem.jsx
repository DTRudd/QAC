//Michael Green
//restyled by Sophie
import React from 'react';

//shows the tiles on home page - part of the NumberList function
export default class FilmPageListItem extends React.Component{
	
  onSelect(){
	  this.props.onClick(this.props.film.film_name, this.props.film.film_description, this.props.film.trailer, this.props.film.comments);
  }
	render(){
	  return (    
	  	<div className="mdl-cell mdl-card mdl-color--black" style={{width:"255px"}} onClick={this.onSelect.bind(this)}>
		    <div className="mdl-card__media">
		  	  <img id="1" className="pic"  alt={this.props.film.film_name} src={this.props.film.img}/>
		    </div>
  		  <div className="mdl-card__title mdl-color-text--white">  
    			<h4 className="mdl-card__title-text">{this.props.film.film_name}</h4>
    			<img id="2" height="30px" width="30px" className="age-rating-logo" alt={this.props.film.rating_name} src={this.props.film.age_rating}/>
		    </div>
		    <div className="mdl-card__supporting-text mdl-color-text--white">{this.props.film.quote}</div>
  		</div>
	  );
	}
}
