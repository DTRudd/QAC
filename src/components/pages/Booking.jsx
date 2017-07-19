import React from 'react';
import PriceList from '../../../res/prices.json';
import Locations from '../../../res/Locations.json';

export default class Booking extends React.Component {
    
    constructor(){
        super();
        this.state={
            ticketQuantity : 1,
            adultTick : 0,
            kidTick : 0,
            seniorTick : 0,
            finalTicketQuantity : 0,
            ticketType : "",
            isAdultActive: false,
            isKidActive: false,
            isSeniorActive: false,
            isTotalActive: false,
            chosenCinema: '',
            chosenSeats: ''
        };
    }
   
    increaseTicketQuantity(){
        if (this.state.ticketQuantity > 0 && this.state.ticketQuantity <5){
        this.setState({ticketQuantity : this.state.ticketQuantity+1});
        }
    }
    
    decreaseTicketQuantity(){
        if (this.state.ticketQuantity > 1){
        this.setState({ticketQuantity : this.state.ticketQuantity -1});
        }
    }
    
    sumAdults(){
        this.setState({
            ticketQuantity : 1,
            finalTicketQuantity: this.state.finalTicketQuantity + this.state.ticketQuantity,
            adultTick : this.state.adultTick + this.state.ticketQuantity,
            isAdultActive: true,
            isTotalActive: true
        });   
    }  
    
    sumKids(){
        this.setState({
            ticketQuantity : 1,
            finalTicketQuantity: this.state.finalTicketQuantity + this.state.ticketQuantity,
            kidTick : this.state.kidTick + this.state.ticketQuantity,
            isKidActive : true,
            isTotalActive: true
        });
    }
    
    sumSeniors(){
         this.setState({
            ticketQuantity : 1,
            finalTicketQuantity: this.state.finalTicketQuantity + this.state.ticketQuantity,
            seniorTick : this.state.seniorTick + this.state.ticketQuantity,
            isSeniorActive:true,
            isTotalActive: true
        });
    }
    
    
    clearAdult(){
        this.setState({finalTicketQuantity : this.state.finalTicketQuantity - this.state.adultTick});
        this.setState({
            adultTick: 0,
            isAdultActive: false,
        });
        totalPrice();
    }
    
    clearKids(){
        this.setState({finalTicketQuantity : this.state.finalTicketQuantity - this.state.kidTick});
        this.setState({
            kidTick: 0,
            isKidActive: false
        });
       totalPrice();
    }
    
    clearSeniors(){
        this.setState({finalTicketQuantity : this.state.finalTicketQuantity - this.state.seniorTick});
        this.setState({
            seniorTick: 0,
            isSeniorActive: false
        });
        totalPrice();
    }
    
    sumTotal(){
        switch (this.state.ticketType){
            case "blank": break;
            case "Adult": this.sumAdults();break;
            case "Child": this.sumKids(); break;
            case "Senior": this.sumSeniors(); break;
        }; 
        totalPrice();
    }
    
    setTicketType(e){
        this.setState({ticketType : e.target.value}); 
    }
    
    setChosenCinema(e){
        this.setState({chosenCinema : e.target.value});
    }
    
    setChosenSeat(e){
        this.setState({chosenSeats : e.target.value});
    }
    
    totalPrice(){
        var totalAdultPrice = this.state.adultTick * PriceList.Price[0].price;
        var totalKidPrice = this.state.kidTick * PriceList.Price[1].price;
        var totalSeniorPrice = this.state.seniorTick * PriceList.Price[2].price;
        var totalOverallPrice = totalAdultPrice + totalKidPrice + totalSeniorPrice;
        return (parseFloat(totalOverallPrice).toFixed(2));
    }
    
  render() {
    return (
          <div className = 'bookingSystem' style={{"background-color":"white"}}>
            <h2 className = 'heading'>Booking</h2>
            <div className = "filmNameDisplay"></div>
            
            
<table className= 'setOut'>      
    <tr>
        <div className = "venueAndTimeSelection">
            <td>
                <label>Venue</label>
            </td>
            <td>
                <select onChange = {this.setChosenCinema.bind(this)}>
                  <option value="Please choose a cinema" selected>-</option>
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                  <option value="Edinburgh">Edinburgh</option>
                </select>
            </td>
        </div>
    </tr>
    
    <tr>
        <div className = "ticketQuantitySelection">
        <td>
                  <label>Ticket Type</label>
        </td>
        <td>
                    <select className = "ticketTypeSelection" onChange = {this.setTicketType.bind(this)} >
                        <option value="blank" selected>-</option>
                        <option value="Adult">Adult</option>
                        <option value="Child">Child</option>
                        <option value="Senior">Senior</option>
                    </select>
        </td>
        <td>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" onClick = {this.decreaseTicketQuantity.bind(this)}>-</button>
        </td>
        <td>
                    <label>{this.state.ticketQuantity}</label>
        </td>
        <td>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" onClick = {this.increaseTicketQuantity.bind(this)}>+</button>
        </td>
        <td>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick = {this.sumTotal.bind(this)}>Add To Order</button>
        </td>
        </div>
    </tr>
        
    <tr>
        <div className = "seatSelection">
        <td>
                <label>Select Seating Area</label>
        </td>
        <td>
                    <select onChange = {this.setChosenSeat.bind(this)}>
                      <option value="blank" selected>-</option>
                      <option value="Front Block">Front</option>
                      <option value="Middle Block">Middle</option>
                      <option value="Rear Block">Rear</option>
                    </select>
        </td>
        </div>
    </tr>
  </table>
            
        <div className = "displayTicketSelection">
                  
            <div className = 'basket'>
                {this.state.isAdultActive ? 
                <div className = "adultTicks">
                <p>x {this.state.adultTick} Adult Tickets
                    <button onClick ={this.clearAdult.bind(this)}>Remove</button>
                </p>
                </div> : ''}
                  
                {this.state.isKidActive ? 
                <div className = "kidTicks">  
                <p>x {this.state.kidTick} Child Tickets 
                    <button onClick = {this.clearKids.bind(this)}>Remove</button>
                </p>
                </div> : ''}
                  
                {this.state.isSeniorActive ? 
                <div className = "seniorTicks">
                <p>x {this.state.seniorTick} Senior Tickets 
                    <button onClick = {this.clearSeniors.bind(this)}>Remove</button>
                </p>
                </div> : ''}
            </div>
                  
                  
                <hr width = '75%' />

    <table>      
        <tr>
            <td>
                    {this.state.isTotalActive ?
                    <div className = "totalTicks">
                        <h4>You would like {this.state.finalTicketQuantity} ticket(s).</h4>
                        Cinema: {this.state.chosenCinema}<br />
                        Seats: {this.state.chosenSeats}<br />
                        Price: £{this.totalPrice()}
                    </div> : <h4>Your basket is empty.</h4>}
            </td>
        </tr>
        <tr>
            <div className = 'reviewAndPayButton'>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">REVIEW & PAY
                    </button>
                </div>
        </tr>
    </table>
            
            
        
      </div>
    </div>
    );
  }
}
