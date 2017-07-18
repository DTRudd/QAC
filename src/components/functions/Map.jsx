import React from 'react';

export default class Map extends React.Component {
  
	componentDidMount() {
		this.componentWillUpdate();
	}
  
  	componentWillUpdate() {
		var maps = new window.GMaps({
		  el: '#map',
		  lat: this.props.lat,
		  lng: this.props.lng,
		  zoom: 16
		});
		
		maps.addMarker({
		  lat: this.props.lat,
		  lng: this.props.lng,
		  title: 'QA Cinemas',
		  animation: window.google.maps.Animation.DROP,
		  label: 'A',
		  infoWindow: {
			content: 'QAC,<br />Meridian Showground,<br />Cleethorpes,<br />Lincs.,<br />DN35 0AR'
		  }
		});
	}

  render() {
    return (
      <div className="map-overlay" >
		<div id="map" style={{height: 600, width:600}}></div>
      </div>
    );
  }
}
