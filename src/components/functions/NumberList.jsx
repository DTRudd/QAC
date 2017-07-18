import React from 'react';
import ListItem from './ListItem';

//code to show tiles in order on home page - shouldn't need changing.
export default class NumberList extends React.Component {
  constructor(props) {
    super(props);
    var filmArray = props.films;
    for (let ii = 0; ii < props.films.length; ii++) {
      filmArray[ii].active = false;
    }
    this.state = {
      films:filmArray
    };
    this.changeActiveFilm = this.changeActiveFilm.bind(this);
    console.log(this.state.films);
  }

  changeActiveFilm(index) {
    let filmsTmp = this.state.films;
    for (let ii = 0; ii < filmsTmp.length; ii++) {
      let filmSlice = filmsTmp.slice(ii,ii+1);
      if (ii === index) {
        if (filmSlice[0].active === true) {
          filmSlice[0].active = false;
        } else {
          filmSlice[0].active = true;
        }
      } else {
        filmSlice[0].active = false;
      }
      filmsTmp[ii] = filmSlice[0];
    }
    this.setState({
      films:filmsTmp
    });
    console.log(this.state.films);
  }

  render() {
    return (
      <div className="mdl-grid">
        {this.state.films.map((film) =>
          <div onClick={this.changeActiveFilm.bind(this,film.id-1)}>
            <ListItem key={film.id}
              film={film} />
          </div>
        )}
      </div>
    );
  }
}
