import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import LeftBottom from './static/image/bg-left-bottom.svg';
import LeftTop from './static/image/bg-left-top.svg';
// import { ReactComponent as TopRight } from './static/image/bg-top-right.svg';
import TopRightIcon from './static/image/bg-top-right.svg';
import Image3 from './static/image/img3.png';
import Image1 from './static/image/img1.png';
import AboutImage from './static/image/about-img.jpg';
import ServicesImage1 from './static/image/services-img1.png';
import ServicesImage2 from './static/image/services-img2.jpg';
import ServicesImage3 from './static/image/services-img3.png';
import ServicesImage4 from './static/image/services-img4.jpg';
import ServicesImage5 from './static/image/services-img1.png';
import ServicesLeftBottom from './static/image/services-bg-left-bottom.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/HomePage.scss';

export class HomePage extends React.Component {
	render() {
		return (
			<div className="home-page">
				<img
					src={LeftTop}
					className="left-top-bg"
					alt="top right bg"
				/>
				<img
					src={LeftBottom}
					className="left-bottom-bg"
					alt="top right bg"
				/>
				<img
					src={TopRightIcon}
					className="top-right-bg"
					alt="top right bg"
				/>
				<img
					src={Image1}
					className="top-right-img"
					alt="top right bg"
				/>
				<DefaultLayout>
					<Container>
						<Row>
							<Col md={12}>
								<div className="contant-area">
									<h2><span>Best</span> Business</h2>
									<h1>We're Equally Excited<br />About Corporate</h1>
									<hr />
									<p>Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service</p>
									<Link to="">Learn More</Link>
								</div>
							</Col>
						</Row>
					</Container>
					<div className="about-section">
						<Container>
							<Row>
								<Col md={12}>
								<div className="about-wrapper">
									<img
										src={LeftBottom}
										className="right-bottom-bg"
										alt="right bottom bg"
									/>
									<div className="image-block">
										<img
											src={AboutImage}
											alt="About"
										/>
										<span className="blue"></span>
										<span className="yellow"></span>
										<span className="gray"></span>
									</div>
									<div className="contant-block">
										<h2><span>Abo</span>ut Us</h2>
										<h1>Creative Design &<br />Development</h1>
										<hr />
										<p>Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service</p>
										<Link to="">Read More</Link>
									</div>
								</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="services-section">
						<Container>
							<Row>
								<Col md={12}>
									<div className="services-wrapper">
										<img
											src={ServicesLeftBottom}
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
													src={ServicesImage1}
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
													src={ServicesImage2}
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
													src={ServicesImage3}
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
													src={ServicesImage4}
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
													src={ServicesImage5}
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
								</Col>
							</Row>
						</Container>
					</div>
				</DefaultLayout>
			</div>
		)
	}
}
