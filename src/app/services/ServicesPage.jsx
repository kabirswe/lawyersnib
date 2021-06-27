import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import Image1 from './static/image/img1.png';
import Image2 from './static/image/img2.jpg';
import Image3 from './static/image/img3.png';
import Image4 from './static/image/img4.jpg';
import Image5 from './static/image/img1.png';
import LeftBottom from './static/image/bg-left-bottom.svg';
import { Container } from 'react-bootstrap';
import './static/ServicesPage.scss';

export class ServicesPage extends React.Component {
	render() {
		return (
			<div className="services-page">
				<DefaultLayout>
					<Container>
						<div className="services-wrapper">
							<img
								src={LeftBottom}
								className="right-bottom-bg"
								alt="right bottom bg"
							/>
							<div className="service-box">
								<h2><span>OUR</span> SERVICES</h2>
								<h1>Demand First-Rate Best &<br />Services</h1>
								<hr />
								<p className="description">Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service</p>
							</div>
							<div className="service-box">
								<Link to="">
									<img
										src={Image1}
										alt="right bottom bg"
									/>
									<p className="name">
										<hr /> Legal Services
									</p>
								</Link>
							</div>
							<div className="service-box">
								<Link to="">
									<img
										src={Image2}
										alt="right bottom bg"
									/>
									<p className="name">
										<hr /> Legal Services
									</p>
								</Link>
							</div>
							<div className="service-box">
								<Link to="">
									<img
										src={Image3}
										alt="right bottom bg"
									/>
									<p className="name">
										<hr /> Legal Services
									</p>
								</Link>
							</div>
							<div className="service-box">
								<Link to="">
									<img
										src={Image4}
										alt="right bottom bg"
									/>
									<p className="name">
										<hr /> Legal Services
									</p>
								</Link>
							</div>
							<div className="service-box">
								<Link to="">
									<img
										src={Image5}
										alt="right bottom bg"
									/>
									<p className="name">
										<hr /> Legal Services
									</p>
								</Link>
							</div>
							<div className="all-services" >
								<Link to="">All Services</Link>
							</div>
						</div>
					</Container>
				</DefaultLayout>
			</div>
		)
	}
}