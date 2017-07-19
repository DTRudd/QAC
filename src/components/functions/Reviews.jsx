import React from 'react';
import ReviewsItem from './ReviewsItem';
import ReviewsList from '../../json/Reviews.json';

export default class Reviews extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			inputValue:'',
			ReviewsList:ReviewsList,
			id:this.props.id,
		}
	}
	
	returnMethod(){
		const comments = this.state.ReviewsList.ReviewsList[this.props.id -1].comments;
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
	
	updateJSONFile(){
		var str = JSON.stringify(ReviewsList.ReviewsList[this.props.id-1].comments);
		console.log(str)
		//send input value in to JSON file.
	}

	render(){
		return(
			<div>
			{this.returnMethod()}
				<div className="ReviewCommentSection" >
					<input type="text" value={this.state.inputValue}
						onChange={this.updateInputValue.bind(this)} placeholder="Please leave a comment"/>
					<button onClick={this.updateJSONFile.bind(this)}> Submit </button>
				</div>
			</div>
		);
	}
}