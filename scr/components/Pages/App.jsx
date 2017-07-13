import React from 'react';
import Nav from './../Functions/Nav';
import Footer from './../Functions/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<Nav />
		<div className="mdl-layout__content page-content">{this.props.children}</div>
      </div>
    );
  }
}

export default App;

