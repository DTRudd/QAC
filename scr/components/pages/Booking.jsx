import React from 'react';
import price from '../../../res/prices.json';
import Locations from '../../../res/Locations.json';

export default class Booking extends React.Component {
    
    constructor(){
        super();
        this.state={
            ticketQuantity : 0,
            adultTick : 0,
            kidTick : 0,
            seniorTick : 0,
            finalTicketQuantity : 0,
            ticketType : "",
        };
    }
    
    increaseTicketQuantity(){
        if (this.state.ticketQuantity <5){
        this.setState({ticketQuantity : this.state.ticketQuantity+1});
        }
    }

    decreaseTicketQuantity(){
        if (this.state.ticketQuantity > 0){
        this.setState({ticketQuantity : this.state.ticketQuantity -1});
        }
    }

    sumAdults(){
        this.setState({adultTick : this.state.adultTick + this.state.ticketQuantity});
        this.updateFinalTicketQuantity();
        this.setState({ticketQuantity : 1});
    }  
    
    sumKids(){
        this.setState({kidTick : this.state.kidTick + this.state.ticketQuantity});
        this.updateFinalTicketQuantity();
        this.setState({ticketQuantity : 1});
    }
    
    sumSeniors(){
        this.setState({seniorTick : this.state.seniorTick + this.state.ticketQuantity});
        this.updateFinalTicketQuantity();
        this.setState({ticketQuantity : 1});
    }
    
        
    updateFinalTicketQuantity(){
   return(finalTicketQuantity = this.state.adultTick + this.state.kidTick + this.state.seniorTick);
    }
    
    
    clearAdult(){
        this.setState({finalTicketQuantity : this.state.finalTicketQuantity - this.state.adultTick});
        this.setState({adultTick: 0});
    }
    
    clearKids(){
        this.setState({finalTicketQuantity : this.state.finalTicketQuantity - this.state.kidTick});
        this.setState({kidTick: 0});
    }
    
    clearSeniors(){
        this.setState({finalTicketQuantity : this.state.finalTicketQuantity - this.state.seniorTick});
        this.setState({seniorTick: 0});
    }
    
    sumTotal(){
        switch (this.state.ticketType){
            case "blank": break;
            case "Adult": this.sumAdults();break;
            case "Child": this.sumKids(); break;
            case "Senior": this.sumSeniors(); break;
        }    
    }
    
   
    
    setTicketType(e){
        console.log(e.target.value);
        this.setState({ticketType : e.target.value}); 
    }
    
  render() {
    return (
          <div className = 'bookingSystem' style={{"background-color":"white"}}>

            <h2 className = 'heading'>Booking</h2>


            <div className = "filmNameDisplay"></div>

            <div className = "venueAndTimeSelection">
                <label>Venue</label>
                    <select>
                      <option value="blank" selected>-</option>
                      <option value="1">London</option>
                      <option value="2">Manchester</option>
                      <option value="3">Edinburgh</option>
                    </select>
            </div>

            <div className = "ticketQuantitySelection">
                  <label>Ticket Type</label>
                    <select className = "ticketTypeSelection" onChange = {this.setTicketType.bind(this)} >
                        <option value="blank" selected>-</option>
                        <option value="Adult">Adult</option>
                        <option value="Child">Child</option>
                        <option value="Senior">Senior</option>
                    </select>
                    <button onClick = {this.decreaseTicketQuantity.bind(this)}>-</button>
                    <label>{this.state.ticketQuantity}</label>
                    <button onClick = {this.increaseTicketQuantity.bind(this)}>+</button>
                    
                    <button onClick = {this.sumTotal.bind(this)}>Add To Order</button>
            </div>
            
            
            
            <div className = "seatSelection">
                <label>Select Seating Area</label>
                    <select>
                      <option value="blank" selected>-</option>
                      <option value="1">Front</option>
                      <option value="2">Middle</option>
                      <option value="3">Back</option>
                    </select>
            </div>

            
              <div className = "displayTicketSelection">
                <p>x {this.state.adultTick} Adult Tickets
                    <button onClick ={this.clearAdult.bind(this)}>Remove</button>
                </p>
                  
                <p>x {this.state.kidTick} Child Tickets 
                    <button onClick = {this.clearKids.bind(this)}>Remove</button>
                </p>
                  
                <p>x {this.state.seniorTick} Senior Tickets 
                    <button onClick = {this.clearSeniors.bind(this)}>Remove</button>
                </p>
        
                <hr></hr>
                <h4>Total: x {this.state.finalTicketQuantity} Tickets</h4>
                <h5>Cinema: </h5>
                <h5>Seats: </h5>
            </div>
            
            
            <div className = 'reviewAndPayButton'>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">REVIEW & PAY
                </button>
            </div>
          </div>
    );
  }
}
