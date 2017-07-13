import React from 'react';
import {Link} from 'react-router';

export default class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'Goodfellas'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <ul className="mdl-mini-footer__link-list">
            <li><select className="mdl-textfield__input" value={this.state.value} onChange={this.handleChange}>
                  {this.props.films.map((film) => 
                    <option className="mdl-textfield__input" key={film.id} value={film.film_name}>{film.film_name}</option>
		  )}</select></li>
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
