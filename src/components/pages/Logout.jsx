/*
*	@Auther: Greg
*	@Description: Component for handling user session removal, and cookie removal in the form of logout,
*	  			  this component will overlay the page it is called upon.
*/

import { Component } from 'react';

export default class Logout extends Component {
  
  componentWillMount() {
	if(!this.props.isAuth()) {
		this.props.navigateTo('LOGIN');
	} else {
	this.props.performLogout();
	}
  }
  
  render() {
    return null;
  }
}
