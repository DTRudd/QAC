import React from 'react';
import {Link} from 'react-router';
import Reviews from './Reviews';

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
				<h2>{this.props.film_name}</h2>
				<p>{this.props.film_description}</p>
				<Link to="/Login" activeClassName="active">
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" >Book now</button>
				</Link>
				<iframe title="trailer" width="560" height="315" src={this.props.trailer} frameBorder="0"></iframe>
				<button onClick={this.props.onClose}> close </button>
				<p></p>
				<Reviews comments={this.props.comments}/>
			</div>
		</div>
	);
	}
}
