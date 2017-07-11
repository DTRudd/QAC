import React from 'react';
import {IndexLink} from 'react-router';
import {Link} from 'react-router';

export default class Nav extends React.Component{
	render(){
		return(
			<nav className="top-bar-right navbar" id="menu">
				<h1 className="hide"> "Site Navigation" </h1>
				<ul className="vertical medium-horizontal menu">
					<li><IndexLink to="/" className="pageLink" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/Index1" className="pageLink" activeClassName="active">Index Page</Link></li>
					<li><Link to="/Index2" className="pageLink" activeClassName="active">Index</Link></li>
					<li><Link to="/FindUs" className="pageLink" activeClassName="active">Find us</Link></li>
					<li><Link to="/Booking" className="pageLink" activeClassName="active">Booking</Link></li>
					<li><Link to="/FAQ" className="pageLink" activeClassName="active">FAQs</Link></li>
					<li><Link to="/Films" className="pageLink" activeClassName="active">Films</Link></li>
					<li><Link to="/Info" className="pageLink" activeClassName="active">Information</Link></li>
					<li><Link to="/Login" className="pageLink" activeClassName="active">Log in</Link></li>
				</ul>
			</nav>
		);
	}
}
