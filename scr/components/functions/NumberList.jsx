import React from 'react';
import ListItem from './ListItem';

//code to show tiles in order on home page - shouldn't need changing.
export default class NumberList extends React.Component {
  constructor(props) {
    super(props);
    var activeArray = [];
    for (let ii = 0; ii < props.films.length; ii++) {
      activeArray.push(false);
    }
    this.state = {
      activeArray:activeArray;
    };
  }

  changeActiveFilm(index) {
    let locActiveArray = this.state.activeArray;
    for (let ii = 0; ii < locActiveArray.length; ii++) {
      locActiveArray = false;
    }
    locActiveArray[index] = true;
    this.setState({
      activeArray:locActiveArray;
    });
  }
//TODO: run changeActiveFilm and re-render when a LI is clicked
  const films = props.films;
  return (
    <div className="mdl-grid">
      {films.map((film) =>
        <ListItem key={film.id}
          film={film} />
      )}
    </div>
  );
}
