import React from 'react';
import {Link} from 'react-router';

export default class DropDownInfo extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	render(){
		return(
		<div className="drop-down-information mdl-color-text--white"> 
			<p>{this.props.film_name}</p>
			<p>{this.props.film_description}</p>
			<Link to="/Login" activeClassName="active">
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" > Book now </button>
			</Link>
		</div>
	);
	}
}
