import React from 'react';
import ListItem from './ListItem';

//code to show tiles in order on home page - shouldn't need changing.
  export default function NumberList(props) {
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
