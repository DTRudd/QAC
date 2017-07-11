import React from 'react';
import {GMaps, Marker} from 'react-gmaps';

export default class Map extends React.Component {

	const params = {v: 3, key:AIzaSyD4tmng1Wc3Sw50e7x9IYsUefFaGC_iVv4};  
	const coords = {lat: 0.00102, lng: 53.2};

	onMapCreated(map) {
		map.setOptions({
			disableDefaultUI: true
		});
	},

	render() {
		return (
			<Gmaps
				width={'800px'}
				height={'600px'}
				zoom={12}
				loadingMessage={Finding QA Cinemas}
				params={params}
				onMapCreated={this.onMapCreated}>
				<Marker
					lat={coords.lat}
					lng={coords.lng}
					draggable={false} />
			</Gmaps>
		);
	}
}
