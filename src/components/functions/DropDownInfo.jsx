import React from 'react';
import {Link} from 'react-router';

export default class DropDownInfo extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			
		}
	}
    
    bookNow(){
        localStorage.setItem('filmName', this.props.film_name);
    }
	
	render(){
		return(
		<div className="drop-down-information mdl-color-text--white"> 
			<p>{this.props.film_name}</p>
			<p>{this.props.film_description}</p>
			<Link to="/Booking" activeClassName="active">
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--pink-500" onClick = {this.bookNow.bind(this)}>Book now</button>
			</Link>
		</div>
	);
	}
}
