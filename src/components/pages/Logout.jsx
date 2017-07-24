import React from 'react';

import apiConnect from '../../api/apiConnect';

export default class Logout extends React.Component {
  
  componentWillMount() {
	this.props.performLogout();
  }
  
  render() {
    return null;
  }
}
