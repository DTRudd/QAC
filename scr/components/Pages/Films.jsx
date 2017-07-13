import React from 'react';
import FilmTile from './../Functions/FilmTile';

export default class Home extends React.Component {
  render() {
    return (
	<div>
		<h3>Film page</h3>
      <div className="mdl-grid">
          <FilmTile />
          <FilmTile />
          <FilmTile />
          <FilmTile />
          <FilmTile />
          <FilmTile />
          <FilmTile />
          <FilmTile />
      </div>
	</div>
    );
  }
}
