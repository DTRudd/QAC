import React from 'react';
 import Locations from '../../../res/Locations.json';
  import Map from './../functions/Map';
  
export default class FindUs extends React.Component {
   
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
      return (
        <div style={{height: "100%", width: "100%"}}>
          <h3 className="mdl-layout-title">We are located at Meridian Showground, Cleethorpes, Lincs.</h3>
          <br />
          <div className="find-us-map">
            <h3 className="mdl-layout-title">Find your nearest QA Cinema</h3>       
            <div className = 'cinema-selection'> 
              <label className="mdl-layout-title">Select a cinema location...</label>
              <select id="locationList" className="mdl-textfield__input"
                onChange = {this.getLocationInformation.bind(this)}>
                <option value = "0">Manchester</option>
                <option value = "1">Scarborough</option>
                <option value = "2">London</option>
                <option value = "3">Edinburgh</option>
              </select>
            </div>        
            <Map lat="53.5426" lng="-0.00623" zoom="18"/>
            <Map lat= {this.state.Lat} lng= {this.state.Lng} zoom="18"/>
          </div>       
          <div className="find-us-text">
            <h3 className="mdl-layout-text">Driving:</h3> 
            <p className="mdl-layout-content">From the North: head east along the M180 towards Grimsby, continue
              along the A180 in to Grimsby. From Grimsby follow the A180 along the coast towards Cleethorpes.
              Take the A1098 down the coast, passing the leisure center. We are based oppostite the Cleethorpes Coast light Railway.
            </p>
            <p className="mdl-layout-content">From the South: Take the A16 towards Grimsby. After passing New Waltham take the A1098 eastwards.
              Follow this road passing through Cleethorpes until you reach the coast, when at the coast take the A1098 South.
              Pass the leisure center and continue, We are based oppostite the Cleethorpes Coast light Railway.
            </p>
            <p className="mdl-layout-content">Public transport: The easiest way to find us via public transport is taking the train to Cleethropes train station, then taking the bus down the A1098 to the light railway.
              There are many local buses from local towns and villages.
              Take the A1098 down the coast, passing the leisure center. We are based oppostite the Cleethorpes Coast light Railway.
	    </p>
          </div>
        </div>
      );
    }
}
