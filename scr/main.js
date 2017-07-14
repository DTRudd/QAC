import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
<<<<<<< HEAD
import App from './components/App';
import FindUs from './components/FindUs';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Films from './components/Films';
import InformationPage from './components/InformationPage';
import Login from './components/Login';
import Prices from './components/Prices';
import Home from './components/Home';

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App}>
		<IndexRoute component={Home} />
			<Route path="/Index1" component={Index1} />
			<Route path="/FindUs" component={FindUs} />
			<Route path="/Booking" component={Booking} />
			<Route path="/FAQ" component={FAQ} />
			<Route path="/Films" component={Films} />
			<Route path="/Info" component={InformationPage} />
			<Route path="/Login" component={Login} />
            <Route path = "/Prices" component = {Prices} />
		</Route>
	</Router>,
=======
import App from './components/pages/App';
import FindUs from './components/pages/FindUs';
import Booking from './components/pages/Booking';
import FAQ from './components/pages/FAQ';
import InformationPage from './components/pages/InformationPage';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Contact from './components/pages/Contacts';
import Prices from './components/pages/Prices';


ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="/FindUs" component={FindUs} />
      <Route path="/Booking" component={Booking} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/Info" component={InformationPage} />
      <Route path="/Login" component={Login} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Prices" component={Prices} />
    </Route>
  </Router>,
>>>>>>> 803720e789609b0d2d918ebfb7c20fe8f16d0077
   document.querySelector('#app')
);
