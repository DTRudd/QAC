import React from 'react';

export default class DropDownInfo extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	render(){
		return(
		<div className="Drop-down-information"> 
			<p>{this.props.film_name}</p>
			<p>{this.props.film_description}</p>
		</div>
	);
	}
}