import React from 'react';
import ListItem from './ListItem';

//code to show tiles in order on home page - shouldn't need changing.
	export default function NumberList(props) {
	  const numbers = props.numbers;
	  const titles = props.titles;
	  const ageRating = props.ageRating;
	  const pic = props.pic;
	  const quote = props.quote;
	  return (
		<div className="mdl-grid">
		  {numbers.map((number) =>
			<ListItem key={number.toString()}
					  titles={titles[number-1]}
					  ageRating={ageRating[number-1]}
					  pic={pic[number-1]}
				  	  quote={quote[number-1]}/>
		  )}
		</div>
	  );
	}
