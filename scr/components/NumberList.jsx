import React from 'react';
import ListItem from './ListItem';

//code to show tiles in order on home page - shouldn't need changing.
	export default function NumberList(props) {
	  const numbers = props.numbers;
	  const titles = props.titles;
	  const ageRating = props.ageRating;
	  const pic = props.pic;
	  return (
		<ul className="Display-film-tiles">
		  {numbers.map((number) =>
			<ListItem key={number.toString()}
					  value={number} 
					  titles={titles}
					  ageRating={ageRating[number-1]}
					  pic={pic[number-1]}/>
		  )}
		</ul>
	  );
	}