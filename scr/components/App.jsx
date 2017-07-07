import React from 'react';
import {BrowserRouter, Route, IndexLink, Link} from 'react-router-dom';
import Index from './Index';
import Index2 from './Index2';
import {createHistory} from 'history';

const myHistory = createHistory;

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to="/i1"><h1>Index Page 1</h1></Link>
            <Link to="/i2"><h1>Index Page 2</h1></Link>
            <Route path="/i1" component={Index} />
            <Route path="/i2" component={Index2} />
          </div>
        </BrowserRouter>
        <h1>Quick-buy bar</h1>
      </div>
    );
  }
}
export default App;
