import React from 'react';
import ListItem from './ListItem';

//code to show tiles in order on home page - shouldn't need changing.
	export default function NumberList(props) {
	  const numbers = props.numbers;
	  const titles = props.titles;
	  const ageRating = props.ageRating;
	  const img = props.img;
	  return (
		<ul>
		  {numbers.map((number) =>
			<ListItem key={number.toString()}
					  value={number} 
					  titles={titles}
					  ageRating={ageRating}
					  img={img}/>
		  )}
		</ul>
	  );
	}