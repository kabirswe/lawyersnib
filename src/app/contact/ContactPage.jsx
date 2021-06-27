import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
// import LeftBottom from './static/image/bg-left-bottom.svg';
// import GrayBar from './static/image/gray-bar.svg';
import PhoneImage from './static/image/phone-image.png';
import SmartphoneImage from './static/image/smartphone.svg';
import MapImage from './static/image/map.svg';
import MailImage from './static/image/mail.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/ContactPage.scss';

export class ContactPage extends React.Component {
	render() {
		return (
			<div className="contact-page">
				<DefaultLayout>
				<Container>
					<Row>
						<Col md={12}>
							<div className="form-area">
								<h1><span></span>Contact Us</h1>
								<p>Please indicate the nature of your inquiry and fill in the form below</p>
								<div className="form-content">
									<img className="image-phone" src={PhoneImage} alt="" />
									<form action="">
										<div className="input-block">
											<label htmlFor="">Your Name</label>
											<input type="text" />
										</div>
										<div className="input-block">
											<label htmlFor="">Email Address</label>
											<input type="text" />
										</div>
										<div className="input-block">
											<label htmlFor="">Phone Number</label>
											<input type="text" />
										</div>
										<div className="input-block">
											<label htmlFor="">Message</label>
											<textarea name="" id="" cols="30" rows="6" placeholder="Type your message here"></textarea>
										</div>
										<div className="input-block">
											<button>submit</button>
										</div>
									</form>
									<div className="reach-us">
										<h2><span></span>Reach Us</h2>
										<div className="block">
											<img src={MapImage} alt="" />
											<p>House: Road-11, <br />Bir Uttom Khademul Bashar Sharak, Banani, <br />Dhaka-1213, Bangladesh.</p>
										</div>
										<div className="block">
											<img src={MailImage} alt="" />
											<p>info@lawyersnib.com</p>
										</div>
										<div className="block">
											<img src={SmartphoneImage} alt="" />
											<p>+88 01129029019</p>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				</DefaultLayout>
			</div>
		)
	}
}
