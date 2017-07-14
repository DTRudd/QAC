import React from 'react';
import Price from '../../res/Price.json';
import price_list_creator from './price_list_creator';

export default class Prices extends React.Component{
    
    constructor(){
        super();
        this.state={
        PricesArray : [1],
        TicketCategory : [1]
        }
    }
    
    getTicketInformation(){
        var price_List = Price;
        var Prices_Temp_Array = [];
        var Ticket_Temp_Array = [];
        
        for (let i = 0; i < price_List.Price.length; i++){
            Ticket_Temp_Array.push(price_List.Price[i].price_category);
            Prices_Temp_Array.push(price_List.Price[i].price);
        }
        console.log(Prices_Temp_Array);
        console.log(Ticket_Temp_Array);
        this.setState({TicketCategory:Ticket_Temp_Array});
        this.setState({PricesArray:Prices_Temp_Array});
        console.log(this.state.PricesArray);
          console.log(this.state.TicketCategory);
    }
    
    componentDidMount(){
        this.getTicketInformation();
    }
    
    
    render(){
    return(
        <div>
            <price_list_creator Price_Array = {this.state.PricesArray} Ticket_Array = {this.state.TicketCategory} />
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