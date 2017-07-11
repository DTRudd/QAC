import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
	<GoogleMap
		ref={props.onMapLoad}
		defaultZoom={3}
		defaultCenter={{ lat: 0.00102, lng: 53.02210 }}
	>
		{props.markers.map(marker => (
			<Marker
				{...marker}
			/>
		))}
	</GoogleMap>
));

export default class Map extends React.Component {
	constructor() {
		super();
		this.state = {
			markers: [{
				position: {
					lat: 0.00102,
					lng: 53.02210
				},
				key: 'NE Lincs',
				defaultAnimation: 2
			}]
		};
		this.handleMapLoad = this.handleMapLoad.bind(this);
	}


	handleMapLoad(map) {
		this._mapComponent = map;
		if (map) {
			console.log(map.getZoom());
		}
	}

	render() {
		return (
			<div>
				<GettingStartedGoogleMap
					containerElement={
						<div />
					}
					mapElement={
						<div />
					}
					onMapLoad={this.handleMapLoad}
					markers={this.state.markers}
				/>
			</div>
		);
	}
}
