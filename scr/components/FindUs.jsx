import React from 'react';
import Locations from '../../res/Locations.json';
import Map from './Map';

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
				<h3>Find your nearest QA Cinema</h3>
                
            <div className = 'cinema-selection'>
            <label>Select a cinema location...</label>
             <select id = "locationList"
                onChange = {this.getLocationInformation.bind(this)}>
               <option value = "0">Manchester</option>
               <option value = "1">Scarborough</option>
               <option value = "2">London</option>
               <option value = "3">Edinburgh</option>
             </select>
            </div>
                
                
				<div className="find-us-map">
					<Map lat= {this.state.Lat} lng= {this.state.Lng} zoom="18"/>
				</div>
				
                
                
				<div className="find-us-text">
					<h3>Driving:</h3> 
					<p>From the North: head east along the M180 towards Grimsby, continue
					along the A180 in to Grimsby. From Grimsby follow the A180 along the coast towards Cleethorpes.
					Take the A1098 down the coast, passing the leisure center. We are based oppostite the Cleethorpes Coast light Railway.</p>
				</div>
			</div>
		);
	}
}

