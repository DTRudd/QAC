import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index1 from './components/Index1';
import React from 'react';
import App from './components/App';
import FindUs from './components/FindUs';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Films from './components/Films';
import InformationPage from './components/InformationPage';
import Login from './components/Login';
import Price from './components/Price';

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App}>
		<IndexRoute component={Index1} />
			<Route path="/Index1" component={Index1} />
			<Route path="/FindUs" component={FindUs} />
			<Route path="/Booking" component={Booking} />
			<Route path="/FAQ" component={FAQ} />
			<Route path="/Films" component={Films} />
			<Route path="/Info" component={InformationPage} />
			<Route path="/Login" component={Login} />
            <Route path = "/Price" component = {Price} />
		</Route>
	</Router>,
   document.querySelector('#app')
);
