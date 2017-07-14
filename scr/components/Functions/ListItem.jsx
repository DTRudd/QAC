import React from 'react';

//shows the tiles on home page - part of the NumberList function
export default function ListItem(props) {
  return (    
    <div className="mdl-cell mdl-card" style={{width:"255px"}}>
      <div className="mdl-card__media">
        <img id="1" className="pic"  src={props.film.img}/>
      </div>
      <div className="mdl-card__title">  
        <h4 className="mdl-card__title-text">{props.film.film_name}</h4>
        <img id="2" height="30px" width="30px" className="age-rating-logo" src={props.film.age_rating}/>
      </div>
      <div className="mdl-card__supporting-text">{props.film.quote}</div>
    </div>
  );
}