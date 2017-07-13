import React from 'react';

//shows the tiles on home page - part of the NumberList function
export default function ListItem(props) {
	return (		
		<div className="mdl-cell">
			<div className="background">
				<img id="1" className="pic"  src={props.pic}/>
			</div>
				
			<h4 className="film-title">{props.titles[props.value-1]}</h4>
					
			<div className="age-rating">
				<img id="2" className="age-rating-logo" src={props.ageRating}/>
			</div>
		</div>
	);
}
