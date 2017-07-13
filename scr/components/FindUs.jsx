import React from 'react';
import Map from './Map';

export default class FindUs extends React.Component {
	render() {
		return (
			<div style={{height: "100%", width: "100%"}}>
				<h3>We are located at Meridian Showground, Cleethorpes, Lincs.</h3>
				<br />
				<div className="find-us-map">
					<Map lat="53.5426" lng="-0.00623" zoom="18"/>
				</div>
				
				<div className="find-us-text">
					Driving: 
					<p>From the North: head east along the M180 towards Grimsby, continue
					along the A180 in to Grimsby. From Grimsby follow the A180 along the coast towards Cleethorpes.
					Take the A1098 down the coast, passing the leisure center. We are based oppostite the Cleethorpes Coast light Railway. </p>
					
					<p>From the South: Take the A16 towards Grimsby. After passing New Waltham take the A1098 eastwards.
					Follow this road passing through Cleethorpes until you reach the coast, when at the coast take the A1098 South.
					Pass the leisure center and continue, We are based oppostite the Cleethorpes Coast light Railway. </p>
					
					<p>Public transport: The easiest way to find us via public transport is taking the train to Cleethropes train station, then taking the bus down the A1098 to the ligth railway.
							There are many local buses from local towns and villages.</p>
				</div>
			</div>
		);
	}
}

