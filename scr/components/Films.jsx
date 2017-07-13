import React from 'react';
import FilmTile from './FilmTile';

export default class Home extends React.Component {
  render() {
    return (
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
    );
  }
}
