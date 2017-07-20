import React from 'react';

//Importing the ReviewsList class and Reviews JSON file so they can be used in this class.  _ Michael Green
import ReviewsItem from './ReviewsItem';
import ReviewsList from '../../json/Reviews.json';

//Code to show the reviews for each film when the tile is clicked.

export default class Reviews extends React.Component{
	
	//Constructor for this class, including taking in props from other classes and the state's being defined.
	constructor(props){
		super(props)
		this.state={
			inputValue:'',
			ReviewsList:ReviewsList,
			id:this.props.id,
		}
	}
	
	//Method to show the reviews on the page, using this allows the reviews to be updated when the JSON file is updated.
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
	
	//Method to show the text being entered in to the input box, also stores in the state.
	updateInputValue(e){
		this.setState({inputValue: e.target.value})
	}
	
	//Method to update the JSON file with new reviews from the comment box. This is called by the Submit button.
	updateJSONFile(){
		var str = JSON.stringify(this.state.ReviewsList.ReviewsList[this.props.id-1].comments);
		var newArray = JSON.parse(str);
		console.log(newArray)
		newArray.push("new comment");
		var tempArray=JSON.stringify(newArray);
		console.log(newArray)
		
		var newJSONArray =[];

		console.log("before for loops")
		for(let i =0; i<this.state.ReviewsList.ReviewsList.length; i++){
			var seperateArray=JSON.stringify(this.state.ReviewsList.ReviewsList[i].comments)
			if(i === this.props.id-1){
				newJSONArray.push(tempArray);
			}
			else{
				newJSONArray.push(seperateArray);
			}
			console.log(newJSONArray)
		}
	}

	//The render method for this class. Returning the comments via returnMethod, and input box and a submit button
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

