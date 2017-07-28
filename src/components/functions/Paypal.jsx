import React from 'react';

export default class Paypal extends React.Component {
	
	


render(){
		
		
		
		return (
		<div>
				{/*Paypal Implementation*/}
				
						<div className="paypal">
			
							
					
	                            <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">				
									<input type="hidden" name="cmd" value="_xclick" />
									<input type="hidden" name="business" value="seller@qa.com" />
									<input type="hidden" name="lc" value="GB" />
									<input type="hidden" name="item_name" value="QA Cinema tickets" />
							
								 {/*Variable for the total price inside*/}
									<input type="hidden" name="amount" value={this.props.price} />
									<input type="hidden" name="currency_code" value="GBP" />
									<input type="hidden" name="button_subtype" value="services" />
									<input type="hidden" name="no_note" value="0" />
									<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
									<input className="payButton" type="image" src="img/pay.png" 
									border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"  />

								</form>
						</div>
		
		
		
		
		
		
		</div>
		
		         );
}


}