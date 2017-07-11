import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';



ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App}>
		<IndexRoute component={Home} />
			<Route path="/Home" component={Home} />
    
		</Route>
	</Router>,
   document.querySelector('#app')
);
