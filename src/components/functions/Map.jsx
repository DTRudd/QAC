import React from 'react';
import Locations from '../../json/Locations.json'

export default class Map extends React.Component {
  
  componentDidMount() {
    var maps = new window.GMaps({
      el: '#map',
      lat: Locations.Location[0].lat,
      lng: Locations.Location[0].lng,
      zoom: 16
    });
    maps.addMarker({
      lat: Locations.Location[0].lat,
      lng: Locations.Location[0].lng,
      title: 'QA Cinemas',
      animation: window.google.maps.Animation.DROP,
      label: 'A',
    });
    
  }
  
  componentWillUpdate(nextProps) {
    console.log(nextProps);
    var maps = new window.GMaps({
      el: '#map',
      lat: nextProps.lat,
      lng: nextProps.lng,
      zoom: 16
    });
    maps.addMarker({
      lat: nextProps.lat,
      lng: nextProps.lng,
      title: 'QA Cinemas',
      animation: window.google.maps.Animation.DROP,
      label: 'A',
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
