import React from 'react';

//shows the tiles on home page - part of the NumberList function
export default function ListItem(props) {
	return (		
		<div className="mdl-cell mdl-card" style={{width:"255px"}}>
			<div className="mdl-card__media">
				<img id="1" className="pic"  src={props.pic}/>
			</div>
			<div className="mdl-card__title">	
				<h4 className="mdl-card__title-text">{props.titles}</h4>
				<img id="2" height="30px" width="30px" className="age-rating-logo" src={props.ageRating}/>
			</div>
			<div className="mdl-card__supporting-text">{props.quote}</div>
		</div>
	);
}
