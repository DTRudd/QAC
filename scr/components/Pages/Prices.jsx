import React from 'react';

export default class Prices extends React.Component{
    render(){
    return(
        <div>
		<h3>Prices page</h3>
        <section>
        <table>
            <thead>
                <tr>
                    <th>Choose</th>
                    <th>Pricing</th>
                </tr>
            </thead>
        
            <tbody>
                <tr>
                    <th>Adults</th>
                    <th>£8.00</th>
                </tr>
                <tr>
                    <th>Kids</th>
                    <th>£6.00</th>
                </tr>
                <tr>
                    <th>Over 60s</th>
                    <th>£7.00</th>
                </tr>
            </tbody>
        </table>
    
        </section>
        </div>
    );    
    }
}