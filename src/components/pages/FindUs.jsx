import React, { Component } from 'react';
import Locations from '../../json/Locations.json';
import Map from '../functions/Map';
  
export default class FindUs extends Component {
   
  constructor(){
    super();
    this.state = {
      Location : Locations.Location[0].location,
      Lat: Locations.Location[0].lat,
      Lng: Locations.Location[0].lng,
    };
    this.getLocationInformation = this.getLocationInformation.bind(this);
  }
         
  getLocationInformation(e){
    let locations = Locations.Location;
    this.setState({
      Location:locations[e.target.value].location,
      Lat:locations[e.target.value].lat,
      Lng:locations[e.target.value].lng
    });
  }
    
  render() {
	  const { Lat, Lng } = this.state;
	  console.log(Lat);
    return (
      <div className="mdl-layout-content mdl-grid">
        <h3 className="mdl-layout-title mdl-cell mdl-cell--12-col">Find your nearest QA Cinema</h3>       
        <label className="mdl-layout-title mdl-cell mdl-cell--12-col">Select a cinema location...</label>
        <div className="mdl-cell mdl-cell--12-col">
          <select id="locationList" className="mdl-textfield__input"
            onChange = {this.getLocationInformation}>
            <option value = "0">Manchester</option>
            <option value = "1">Scarborough</option>
            <option value = "2">London</option>
            <option value = "3">Edinburgh</option>
          </select>
          <Map lat={Lat} lng={Lng} zoom="18"/>
        </div>
      </div>
    );
  }
}
