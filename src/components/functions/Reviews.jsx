import React from 'react';
import ReviewsItem from './ReviewsItem';

export default class Reviews extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
		}
	}
	
	returnMethod(){
		const comments = this.props.comments;
		return(
		<ul className="demo-list-three mdl-list">
			  {comments.map((comments) =>
			  <ReviewsItem key={comments}
					 comments={comments}/>
			  )}
		</ul>
		);
	}

	render(){
		return(
			<div>
			{this.returnMethod()}
				<input type="text" placeholder="please leave a review here" />
				<button > Submit </button>
			</div>
		);
	}
}