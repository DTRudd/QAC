import React from 'react';

//code for showing each for the reviews for each film. This component is called in to the Reviews.jsx _ Michael Green
export default class ReviewsItem extends React.Component{

	//Render method to display the comments passed from Reviews.jsx file. This has been styled with MDL.
	render(){
	  return (    
		<li className="mdl-list__item mdl-list__item--three-line">
			<span className="mdl-list__item-primary-content">
				<span>{this.props.comments}</span>
			</span>
		</li>
	  );
	}
}