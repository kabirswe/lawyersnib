import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "./static/image/logo.svg";
import { ReactComponent as Headphones } from "./static/image/headphones.svg";
import { ReactComponent as Search } from "./static/image/search.svg";
import './static/Navbar.scss';

const Navbar = ({type,inputRef,children, ...rest}) => {

	// const [home, setHome] = useState('active');
	// const [about, setAbout] = useState('');
	// const [services, setServices] = useState('');
	// const [ourteam, setOurteam] = useState('');
	// const [contact, setContact] = useState('');

	// const onChangeNavbar = id => {
	// 	setAcn1('')
	// 	setAcn2('')
	// 	setAcn3('')
	// 	if(id === 'a')      setAcn1('active')
	// 	else if(id === 'b') setAcn2('active')
	// 	else if(id === 'c') setAcn3('active')
	// }

  return (
	<div className="main-navbar">
		<div className="nav-list-block">
			<Link to="/" className="logo-block">
				<Logo height="30" width="30" />
			</Link>
			<div className="name">Lawyers Nib</div>
			<NavLink to="/" activeClassName="active">Home</NavLink>
			<NavLink to="/about" activeClassName="active">About</NavLink>
			<NavLink to="/services" activeClassName="active">Services</NavLink>
			<NavLink to="/our-team" activeClassName="active">Our Team</NavLink>
			<NavLink to="/contact" activeClassName="active">Contact</NavLink>
			{/* <div className="search">
				<Search height="15" width="15" />
			</div> */}
	  	</div>
	  	<div className="call-block">
			<Headphones height="25" width="25" />
			<p>call <br /><span>+8801212121212</span></p>
	  	</div>
	</div>
  );
};

export default Navbar;