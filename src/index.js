//Sophie
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import App from './components/pages/App';
import FindUs from './components/pages/FindUs';
import Booking from './components/pages/Booking';
import FAQ from './components/pages/FAQ';
import InformationPage from './components/pages/InformationPage';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Prices from './components/pages/Prices';
import Films from './components/pages/Films';
import Forum from './components/pages/Forum';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="/FindUs" component={FindUs} />
      <Route path="/Booking" component={Booking} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/Info" component={InformationPage} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Prices" component={Prices} />
      <Route path="/Films" component={Films} />
      <Route path="/Forum" component={Forum} />
    </Route>
  </Router>,
  document.querySelector('#app')
);
