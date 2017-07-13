import React from 'react';
import Price from '../../res/Price.json';

export default class Prices extends React.Component{
    
    constructor(){
        super();
        this.state={
        Prices_Array : [],
        Ticket_Category : [],
        };
    }
    
    getTicketInformation(){
        var price_List = Price;
        var Prices_Temp_Array = [];
        var Ticket_Temp_Array = [];
        console.log(price_List.Price[2].price);
        for (var i = 0; i < price_List.Price.length; i++){
            Ticket_Temp_Array.push(price_List.Price[i].price_category);
            Prices_Temp_Array.push(price_List.Price[i].price);
        }
        this.setState({Prices_Array : Prices_Temp_Array});
        this.setState({Ticket_Category : Ticket_Temp_Array});
    }
    
    componentDidMount(){
        this.getTicketInformation();
    }
    
    
    render(){
    return(
        <div>

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