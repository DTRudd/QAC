import React from 'react';

//shows the tiles on home page - part of the NumberList function
export default function ListItem(props) {
	return (		
		<div className="mdl-cell mdl-card">
			<div className="mdl-card__media">
				<img id="1" className="pic"  src={props.pic}/>
				<img id="2" className="age-rating-logo" src={props.ageRating}/>
			</div>
			<div className="mdl-card__title">	
				<h4 className="mdl-card__title-text">{props.titles}</h4>
			</div>
			<div className="mdl-card__supporting-text">{props.quote}</div>
		</div>
	);
}
