import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
		<Nav />
		{this.props.children}
		<Footer />
      </div>
    );
  }
}

export default App;

