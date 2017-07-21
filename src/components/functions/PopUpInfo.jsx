import React from 'react';
import {Link} from 'react-router';
import Reviews from './Reviews';

export default class PopUpInfo extends React.Component{
	
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
		<div className="popUpInfoBox">
			<div className="Pop-Up-information"> 
				<div className="filmInfoCloseButton" onClick={this.props.onClose}>
					<span className="accountClose" >X</span>
				</div>
				<h2>{this.props.film_name}</h2>
				<p>{this.props.film_description}</p>
				<iframe title="trailer" width="560" height="315" src={this.props.trailer} frameBorder="0"></iframe>
				<Link to="/Bookings" activeClassName="active">
					<div className="bookNowButtonDiv">
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" >Book now</button>
					</div>
				</Link>
				
				<p></p>
				<Reviews comments={this.props.comments}/>
			</div>
		</div>
	);
	}
}
