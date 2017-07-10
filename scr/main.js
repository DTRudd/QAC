import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index1 from './components/Index1';
import Index2 from './components/Index2';
import React from 'react';
import App from './components/App';

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App}>
		<IndexRoute component={Index1} />
			<Route path="/Index1" component={Index1} />
			<Route path="/Index2" component={Index2} />
		</Route>
	</Router>,
   document.querySelector('#app')
);
