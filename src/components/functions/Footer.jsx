import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component{
  constructor(props) {
    super(props);
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    this.state = {
      film: 'Goodfellas',
      location: 'Manchester',
      date: days[d.getDay()] + ' ' + d.getDate() + this.getSuffix(d.getDate()) + ' ' + months[d.getMonth()],
      time: '2:30pm'
    };
    this.handleFilmChange = this.handleFilmChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    console.log(this.state.date);
  }

  getSuffix(dayNum) {
    if (dayNum === 1 || dayNum === 21 || dayNum === 31) {
      return "st";
    } else if (dayNum === 2 || dayNum === 22) {
      return "nd";
    } else if (dayNum === 3 || dayNum === 23) {
      return "rd";
    } else {
      return "th";
    }
  }
  handleFilmChange(event) {
    this.setState({film: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }
  
  handleTimeChange(event) {
    this.setState({time: event.target.value});
  }

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }

  render(){
    return(
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <ul className="mdl-mini-footer__link-list">
            <li>
              <select className="mdl-textfield__input" value={this.state.value} onChange={this.handleFilmChange}>
                {this.props.films.map((film) => 
                  <option className="mdl-textfield__input" key={film.id} value={film.film_name}>{film.film_name}</option>
		)}
              </select>
            </li>
            <li>
              <select className="mdl-textfield__input" value={this.state.location} onChange={this.handleLocationChange}>
                {this.props.locations.map((location) =>
                  <option className="mdl-textfield__input"  value={location.location}>{location.location}</option>
                )}
              </select>
            </li>
            <li>
              <select className="mdl-textfield__input" value={this.state.date} onChange={this.handleDateChange}>
                <option className="mdl-textfield__input" value={this.state.date}>{this.state.date}</option>
              </select>
            </li>
            <li>
              <select className="mdl-textfield__input" value={this.state.time} onChange={this.handleTimeChange}>
                <option className="mdl-textfield__input" value={this.state.time}>{this.state.time}</option>
              </select>   
            </li>
          </ul>
        </div>
        <div className="mdl-mini-footer__right-section">
          <ul className="mdl-mini-footer__link-list">
            <li>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Book now!</button>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}