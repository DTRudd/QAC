import React from 'react';
import NukaCarousel from 'nuka-carousel';

export default class CarouselN extends React.Component{
	
 mixins: [NukaCarousel.ControllerMixin]
 
 render(){
 return (
 
 
	<NukaCarousel wrapAround = {true} autoplay = {true}>
 
		<img className="poster" src = "res/img/carousel/spiderman.jpg" />;
		<img className="poster" src = "res/img/carousel/apesposter.jpg" />
		<img className="poster" src = "res/img/carousel/despicable.jpg" />
	</NukaCarousel>
 
 );
 
 }


}