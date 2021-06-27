import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./static/image/logo.svg";
import { ReactComponent as Headphones } from "./static/image/headphones.svg";
import { ReactComponent as Search } from "./static/image/search.svg";
import './static/Navbar.scss';

const Navbar = ({type,inputRef,children, ...rest}) => {
  return (
	<div className="main-navbar">
		<div className="nav-list-block">
			<Link to="/" className="logo-block">
				<Logo height="30" width="30" />
			</Link>
			<div className="name">Lawyers Nib</div>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/services">Services</Link>
			<Link to="/our-team">Our Team</Link>
			<Link to="/contact">Contact</Link>
			<div className="search">
				<Search height="15" width="15" />
			</div>
	  	</div>
	  	<div className="call-block">
			<Headphones height="25" width="25" />
			<p>call <br /><span>+8801212121212</span></p>
	  	</div>
	</div>
  );
};

export default Navbar;