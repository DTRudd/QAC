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
        filmSlice[0].active = true;
      } else {
        filmSlice[0].active = false;
      }
      console.log(filmSlice);
      filmsTmp[ii] = filmSlice[0];
    }
    this.setState({
      films:filmsTmp
    });
  }


//TODO: run changeActiveFilm and re-render when a LI is clicked
  render() {
    return (
      <div className="mdl-grid">
        {this.state.films.map((film) =>
          <ListItem key={film.id}
            film={film} onClick = {() => this.changeActiveFilm(film.id-1)}/>
        )}
      </div>
    );
  }
}
