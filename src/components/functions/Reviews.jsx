import React from 'react';
import ReviewsItem from './ReviewsItem';

export default class Reviews extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			inputValue:'Please leave a comment',
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
	
	updateInputValue(e){
		this.setState({inputValue: e.target.value})
	}

	render(){
		return(
			<div>
			{this.returnMethod()}
				<div className="ReviewCommentSection" >
					<input type="text" value={this.state.inputValue}
						onChange={this.updateInputValue.bind(this)} />
					<button > Submit </button>
				</div>
			</div>
		);
	}
}