import React from 'react';
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import Index from './Index';
import Index2 from './Index2';
import {createHistory} from 'history';

const myHistory = createHistory;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <BrowserRouter>
          <Route path="/" component={Index2} />
        </BrowserRouter>
        <h1>Quick-buy bar</h1>
      </div>
    );
  }
}
export default App;
