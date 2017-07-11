import React from 'react';
import FilmTile from './FilmTile';

export default class Home extends React.Component {
  render() {
    return (
	<div>
      <h2>Home</h2>
            
        <div id = "content">
            
            <FilmTile />
            <FilmTile />
            <FilmTile />
            
        <hr width="75%" align="center">
            
            <FilmTile />
            <FilmTile />
            <FilmTile />
    
    </div>
	);
  }
}
