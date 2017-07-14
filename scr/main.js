import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index1 from './components/Pages/Index1';
import React from 'react';
import App from './components/Pages/App';
import FindUs from './components/Pages/FindUs';
import Booking from './components/Pages/Booking';
import FAQ from './components/Pages/FAQ';
import Films from './components/Pages/Films';
import InformationPage from './components/Pages/InformationPage';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import contact from './components/Pages/contacts';
import Prices from './components/Pages/Prices';

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App}>
		<IndexRoute component={Home} />
			<Route path="/Index1" component={Index1} />
			<Route path="/Films" component={Films} />
			<Route path="/FindUs" component={FindUs} />
			<Route path="/Booking" component={Booking} />
			<Route path="/FAQ" component={FAQ} />
			<Route path="/Films" component={Films} />
			<Route path="/Info" component={InformationPage} />
			<Route path="/Login" component={Login} />
			<Route path="/contact" component={contact} />
			<Route path="/Prices" component={Prices} />
		</Route>
	</Router>,
   document.querySelector('#app')
);
