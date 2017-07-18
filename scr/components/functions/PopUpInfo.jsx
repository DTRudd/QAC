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
<<<<<<< HEAD
				<p>{this.props.film_name}</p>
=======
				<h2>{this.props.film_name}</h2>
>>>>>>> origin/Michael
				<p>{this.props.film_description}</p>
				<Link to="/Login" activeClassName="active">
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" > Book now </button>
				</Link>
<<<<<<< HEAD
				<h1>Trailer goes here</h1>
=======
				<iframe width="560" height="315" src={this.props.trailer} frameborder="0" allowfullscreen></iframe>
>>>>>>> origin/Michael
				<button onClick={this.props.onClose}> close </button>
			</div>
		</div>
	);
	}
}