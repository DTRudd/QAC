import React from 'react';
import price from '../../json/prices.json';

export default class Prices extends React.Component{
    
  constructor(){
    super();
      this.state={
        prices_array: [],
        ticket_category: [],
      };
  }
    
  getTicketInformation(){
    var price_list = price;
    var prices_temp_array = [];
    var ticket_temp_array = [];
    console.log(price_list.price[2].price);
    for (var i = 0; i < price_list.price.length; i++){
      ticket_temp_array.push(price_list.price[i].price_category);
      prices_temp_array.push(price_list.price[i].price);
    }
    this.setState({prices_array: prices_temp_array});
    this.setState({ticket_category: ticket_temp_array});
  }
    
  componentDidMount(){
    this.getTicketInformation();
  }
      
  render(){
    return(
      <div className="mdl-color--grey-700">
        <h4 className="mdl-layout-title mdl-color-text--white">Prices page</h4>
        <section className="mdl-color-text--white">  
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
