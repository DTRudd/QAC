import React, { Component } from 'react';

export default class Map extends Component {
  
	componentDidMount() {
		this.loadMap(this.props);
	}
  
  componentWillReceiveProps(nextProps) {
		this.loadMap(nextProps);
	}
	
	loadMap(props) {
            console.log(props.lat);
            var maps = new window.GMaps({
              el: '#map',
              lat: props.lat,
              lng: props.lng,
              zoom: 16
            });
        maps.addMarker({
          lat: props.lat,
          lng: props.lng,
          title: 'QA Cinemas',
          animation: window.google.maps.Animation.DROP,
          label: 'A',
        });
    }
    
    
    
  render() {
    return (
      <div className="map-overlay" >
		    <div id="map" style={{height: 400, width:400}}></div>
      </div>
    );
  }
}
