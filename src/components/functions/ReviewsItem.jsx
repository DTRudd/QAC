import React from 'react';

export default class ReviewsItem extends React.Component{

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