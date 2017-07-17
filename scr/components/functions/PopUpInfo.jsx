import React from 'react';
import {Link} from 'react-router';

export default class PopUpInfo extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	render(){
		return(
		<div className="popUpInfoBox">
			<div className="Pop-Up-information"> 
				<p>{this.props.film_name}</p>
				<p>{this.props.film_description}</p>
				<Link to="/Login" activeClassName="active">
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" > Book now </button>
				</Link>
				<h1>Trailer goes here</h1>
				<button onClick={this.props.onClose}> close </button>
			</div>
		</div>
	);
	}
}