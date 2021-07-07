import React from 'react';
import { Link } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
import Logo1 from './static/image/logo1.png';
import Logo2 from './static/image/logo2.png';
import Facebook from './static/image/facebook.svg';
import Google from './static/image/google-plus.svg';
import Twitter from './static/image/twitter.svg';
import Linkedin from './static/image/linkedin.svg';
import FooterBg from './static/image/footer-bg.svg';
import RightArrow from './static/image/right-arrow.svg';
import './static/Footer.scss';

const Footer = () => {
  return (
	<div className="main-footer">
		<img
			src={FooterBg}
			className="middle-bottom-bg"
			alt="top right bg"
		/>
		<img
			src={FooterBg}
			className="right-bottom-bg"
			alt="top right bg"
		/>
		<Container>
			<Row>
				<Col md={12}>
					{/* <div className="certificate-block">
						<img
							src={Logo1}
							alt="logo"
						/>
						<img
							src={Logo2}
							alt="logo"
						/>
						<img
							src={Logo1}
							alt="logo"
						/>
						<img
							src={Logo2}
							alt="logo"
						/>
						<img
							src={Logo1}
							alt="logo"
						/>
						<img
							src={Logo2}
							alt="logo"
						/>
					</div> */}
				</Col>
			</Row>
			<div className="content-wrapper">
				<div className="contact-block">
					<div className="contact">
						<p>Need an consultant ? Let's talk</p>
						<Link to="/contact">
							<img src={RightArrow} alt="contct link" />
						</Link>
					</div>
					<div className="social-icons">
						<p>Follow Us</p>
						<Link to=""><img src={Facebook} alt="social icon" /></Link>
						<Link to=""><img src={Twitter} alt="social icon" /></Link>
						<Link to=""><img src={Google} alt="social icon" /></Link>
						<Link to=""><img src={Linkedin} alt="social icon" /></Link>
					</div>
				</div>
				<div className="address-block">
					<p>+88 01129029019</p>
					<p>info@lawyersnib.com</p>
					<p>House: Road-11, Bir Uttom Khademul Bashar Sharak, Banani, Dhaka-1213, Bangladesh.</p>
				</div>
			</div>
			<div className="copy-right-wrapper">
				<p>© 2021. All Rights Reserved by Lawyers Nib</p>
			</div>
		</Container>
	</div>
  );
};

export default Footer;