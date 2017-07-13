import React from 'react';
import Nav from './../Functions/Nav';
import Footer from './../Functions/Footer';
import Drawer from './../Functions/Drawer';
class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
        <Nav />
        <Drawer />
        <div className="mdl-layout__content page-content">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default App;

