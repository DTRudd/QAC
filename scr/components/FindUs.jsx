import React from 'react';
import Map from './Map';

export default class FindUs extends React.Component {
	render() {
		return (
			<div style={{height: "100%", width: "100%"}}>
				<h3>We are located at Meridian Showground, Cleethorpes, Lincs.</h3>
				<br />
				<Map lat="53.5421" lng="-0.0065" zoom="18"/>
			</div>
		);
	}
}

