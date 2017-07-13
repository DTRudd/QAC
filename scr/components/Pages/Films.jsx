import React from 'react';
import FilmTile from './../Functions/FilmTile';

export default class Home extends React.Component {
  render() {
    return (
	<div>
		<h4>Film page</h4>
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
