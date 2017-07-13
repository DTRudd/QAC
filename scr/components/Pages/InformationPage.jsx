import React from 'react';
import Price from './Prices';
import FAQ from './FAQ';

export default class InformationPage extends React.Component{
    
    
    render(){
    return(
		<div>
			<h4>Information page</h4>
			<Prices />
			<FAQ />
		</div>
    );    
    }
}
