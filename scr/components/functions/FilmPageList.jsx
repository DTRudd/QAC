import React from 'react';
import ListItem from './ListItem';
import FilmPageListItem from './FilmPageListItem';
import PopUpInfo from './../functions/PopUpInfo';

//code to show tiles in order on home page - shouldn't need changing.
  export default class FilmPageList extends React.Component {
	constructor(){
		super();
		this.state={
			isActive:false,
			filmName: '',
			filmDesc: '',
			trailer:''
		}
	}
	
	onSelect(filmName, filmDesc, trailer){
		this.setState({
			isActive: !this.state.isActive,
			filmName: filmName,
			filmDesc: filmDesc,
			trailer: trailer
		});
	}
	
	onClose(){
		this.setState({isActive:false});		
	}	
	
	render() {
    const films = this.props.films;
		return (
			<div className="mdl-grid">
			  {films.map((film) =>
			  <FilmPageListItem key={film.id}
					 film={film} onClick={this.onSelect.bind(this)} />
			  )}
			{ this.state.isActive ? <PopUpInfo film_name={this.state.filmName} film_description={this.state.filmDesc} 
										trailer={this.state.trailer} onClose={this.onClose.bind(this)} /> : ''}
			</div>
		);
	}
  }