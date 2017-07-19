import React from 'react';

export default class Booking extends React.Component {
  render() {
    return (
      <div className = 'bookingSystem mdl-color--grey-700'>
        <div className = "filmNameDisplay">
        </div>
        <div className = "venueAndTimeSelection">
        </div>
        <div className = "ticketQuantitySelection">
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-color--pink-500 mdl-color-text--white">
          <i className="material-icons">add</i>
        </button>
        </div>
        <div className = "seatSelection">
        </div>
        <div className = 'reviewAndPayButton'>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--pink-500">REVIEW & PAY
            </button>
        </div>
      </div>
    );
  }
}
