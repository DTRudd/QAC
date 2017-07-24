import React, { Component } from 'react';

import apiConnect from '../../api/apiConnect';

export default class Logout extends Component {
  
  componentWillMount() {
	this.props.performLogout();
  }
  
  render() {
    return null;
  }
}
