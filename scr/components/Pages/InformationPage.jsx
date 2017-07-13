import React from 'react';
import Price from './Prices';
import FAQ from './FAQ';

export default class InformationPage extends React.Component{
    
    
    render(){
    return(
		<div>
			<h3>Information page</h3>
			<Prices />
			<FAQ />
		</div>
    );    
    }
}
