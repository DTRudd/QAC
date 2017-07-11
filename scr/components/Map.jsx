import React from 'react';

export default class Map extends React.Component {

	componentDidMount() {
		this.componentDidUpdate();
	}

	componentDidUpdate() {
		var maps = new GMaps({
			el: '#map',
			lat: this.props.lat,
			lng: this.props.lng,
			zoom: 16
		});
	}

	render() {
		return (
			<div className="map-overlay" >
				<div id="map" style={{height: 600, width:600}} ></div>
			</div>
		);
	}
}
