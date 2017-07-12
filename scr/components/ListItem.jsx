import React from 'react';

//shows the tiles on home page - part of the NumberList function
	export default function ListItem(props) {
		return <li>
		
		<main className="mdl-layout__content">   		
			<div className="mdl-grid">
				<div className = "film-tile-padding">
					<div className="container mdl-shadow--2dp"> 
						<div className="mdl-cell mdl-cell--3-col graybox">
						
							<div className="background">
								<img id="1" className="pic"  src={props.pic}/>
							</div>
							
						<h4>{props.titles[props.value-1]}</h4>
						<img id="2" className="age"  src={props.ageRating}/>
						
						</div>
					</div>
				</div>
			</div>
		</main>
	
		</li>;
	}