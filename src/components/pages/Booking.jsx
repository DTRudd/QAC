import React from 'react';

export default class Booking extends React.Component {
  render() {
    return (
      <div className = 'bookingSystem'>
            
        <div className = "filmNameDisplay">
        </div>
        
        <div className = "venueAndTimeSelection">
        </div>
        
        <div className = "ticketQuantitySelection">
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
            <i class="material-icons">add</i>
        </button>
        </div>
        
        <div className = "seatSelection">
        </div>
        
        <div className = 'reviewAndPayButton'>
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">REVIEW & PAY
            </button>
        </div>
      </div>
    );
  }
}
