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
      
        <div className = 'mapDisplay'>

            
        <div className = "filmNameDisplay" style = {{backgroundImage : 'url(/img/back04.jpg)'}}>
            <br /><br /><br /><br />
            <h2 className = 'findUsHeading'>Find Us</h2>
        </div>
            
            
        <div className="mapSetOut" style = {{background: 'white'}}>
            <h3 className = 'mapHeading'>Find your nearest QA Cinema</h3>
            
            
        <table className = "mapTable" >
            <tr>
                <td>
                    <select className = 'dropdownMap' id="locationList" onChange = {this.getLocationInformation}>
                    <option value = '4'>Select Cinema Location</option>
                      <option value = "0">Manchester</option>
                      <option value = "1">Scarborough</option>
                      <option value = "2">London</option>
                      <option value = "3">Edinburgh</option>
                    </select>
                </td>
            </tr> 
            
            <tr>

                <td>
                    <Map lat={Lat} lng={Lng} zoom="18"/>
                </td>
            </tr>
        </table>
        </div>
            
 </div>

    );
  }
}
