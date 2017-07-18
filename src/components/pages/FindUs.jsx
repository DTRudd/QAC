import React, { Component } from 'react';
import Locations from '../../json/Locations.json';
import Map from '../functions/Map';
  
export default class FindUs extends Component {
   
  constructor(){
    super();
    this.state = {
      Location : "Manchester",
      Lat : "53.475617",
      Lng : "-2.243872"
    }
  }
         
  getLocationInformation(e){
    var selected_location = e.target[e.target.value].text;
    Locations.Location.filter(location_data_row => location_data_row.location === selected_location).map(location_data_row => {
      this.setState({
        Location : selected_location,    
        Lat : location_data_row.lat,
        Lng : location_data_row.lng
      })
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
            onChange = {this.getLocationInformation.bind(this)}>
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