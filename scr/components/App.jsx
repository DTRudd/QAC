import React from 'react';
import Nav from './Nav';
import SiteMapFooter from './SiteMapFooter';

class App extends React.Component {
  render() {
    return (
		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<Nav />
				<div className="mdl-layout__content page-content">{this.props.children}</div>
				<SiteMapFooter />
		</div>
    );
  }
}

export default App;

