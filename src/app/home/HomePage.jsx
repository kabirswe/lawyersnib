import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import LeftBottom from './static/image/bg-left-bottom.svg';
import LeftTop from './static/image/bg-left-top.svg';
// import { ReactComponent as TopRight } from './static/image/bg-top-right.svg';
import TopRightIcon from './static/image/bg-top-right.svg';
import Image1 from './static/image/img1.png';
import Image2 from './static/image/img2.png';
import Image3 from './static/image/img3.png';
import Image4 from './static/image/img4.png';
import AboutImage from './static/image/about-img.jpg';

import ServicesImage1 from './static/image/services-img1.png';
import ServicesImage2 from './static/image/services-img2.jpg';
import ServicesImage3 from './static/image/services-img3.png';
import ServicesImage4 from './static/image/services-img4.jpg';
import ServicesImage5 from './static/image/services-img1.png';
import ServicesLeftBottom from './static/image/services-bg-left-bottom.svg';

import ProccesImageBg from './static/image/procces-bg.svg';
import AuctionImage from './static/image/auction.svg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MosiurRahman from '../ourteam/static/image/team/Mosiur-Rahman.jpg';
import MohammadShaheenAkter from '../ourteam/static/image/team/Mohammad-Shaheen-Akter.jpg';
import HabiburRahman from '../ourteam/static/image/team/Habibur-Rahman.png';
import MostafizurRahman from '../ourteam/static/image/team/Mostafizur-Rahman.png';
import ShahNuri from '../ourteam/static/image/team/Shah-Nuri.jpg';
import ApurbaDas from '../ourteam/static/image/team/Apurba-Das.jpg';
import Partho from '../ourteam/static/image/team/Partho.jpg';


import { Container, Row, Col } from 'react-bootstrap';
import './static/HomePage.scss';

export const HomePage = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		// speed: 2000,
		autoplaySpeed: 10000,
		cssEase: "linear"
	};

	var pics = [Image1, Image2, Image3, Image4];
	const [sliderCount, setSliderCount] = useState(0);

	const sliderCountFunction = () => {
		sliderCount === 3 ? setSliderCount(0) : setSliderCount(sliderCount + 1);
		setTimeout(() => sliderCountFunction, 10000);
	}
	setTimeout(() => { sliderCountFunction() }, 10000);


	// setInterval(() => {
	// }, 10000);
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
				src={pics[sliderCount]}
				className="top-right-img"
				alt="top right bg"
			/>
			{/* <img
				src={Image1}
				className="top-right-img"
				alt="top right bg"
			/> */}
			<DefaultLayout>
				<Container>
					<Row>
						<Col md={12}>
							<div className="contant-area">
								<h2><span>Best</span> Consultancy</h2>
								<h1>Complete Legal &<br />Business Consultancy</h1>
								<hr />
								<p>Lawyers Nib is a full-service Complete Legal and Business Consultancy Law Firm with a specialization in Civil, Criminal, Corporate, Company, Income Tax, VAT, Customs, Maritime, Banking & Finance, Property and Investment related legal practices.</p>
								<Link to="/about">Learn More</Link>
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
										<h1>At a Glance About Lawyers Nib</h1>
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
										<h1>Demand First-Rate Best Services</h1>
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
				<div className="team-section">
					<Container>
						<Row>
							<Col md={12}>
								<div className="team-wrapper">
									<div className="heading-block">
										<h2><span>Our</span> Team</h2>
										<h1>Comitted To Team Excellence</h1>
										<hr />
									</div>
									<Slider {...settings}>
										<div className="team-block">
											<Link to="/team/Mohammad-Shaheen-Akter">
												<div className="image">
													<img src={MohammadShaheenAkter} alt="" />
												</div>
												<div className="content">
													<h2>MOHAMMAD SHAHEEN AKTER</h2>
													<p>Advocate</p>
													<p>Income Tax & Company Consultant</p>
												</div>
											</Link>
										</div>
										<div className="team-block">
											<Link to="/team/Mosiur-Rahman">
												<div className="image">
													<img src={MosiurRahman} alt="" />
												</div>
												<div className="content">
													<h2>MD. MOSIUR RAHMAN</h2>
													<p>Advocate</p>
													<p>Income Tax & Company Consultant</p>
												</div>
											</Link>
										</div>
										<div className="team-block">
											<Link to="/team/Habibur-Rahman">
												<div className="image">
													<img src={HabiburRahman} alt="" />
												</div>
												<div className="content">
													<h2>MD. Habibur Rahman</h2>
													<p>Advocate</p>
													<p>Income Tax & Company Consultant</p>
												</div>
											</Link>
										</div>
										<div className="team-block">
											<Link to="/team/Mostafizur-Rahman">
												<div className="image">
													<img src={MostafizurRahman} alt="" />
												</div>
												<div className="content">
													<h2>KAZI MD. MOSTAFIZUR RAHMAN</h2>
													<p>Advocate</p>
													<p>Income Tax & Company Consultant</p>
												</div>
											</Link>
										</div>
										<div className="team-block">
											<Link to="/team/Shah-Nuri">
												<div className="image">
													<img src={ShahNuri} alt="" />
												</div>
												<div className="content">
													<h2>MD. SHAH NURI</h2>
													<p>Advocate</p>
													<p>Income Tax & Company Consultant</p>
												</div>
											</Link>
										</div>
										<div className="team-block">
											<Link to="/team/Apurba-Das">
												<div className="image">
													<img src={ApurbaDas} alt="" />
												</div>
												<div className="content">
													<h2>Apurba Das</h2>
													<p>Advocate</p>
													<p>Income Tax & Company Consultant</p>
												</div>
											</Link>
										</div>
										<div className="team-block">
											<Link to="/team/Partho">
												<div className="image">
													<img src={Partho} alt="" />
												</div>
												<div className="content">
													<h2>Partho</h2>
													<p>Advocate</p>
													<p>Income Tax & Company Consultant</p>
												</div>
											</Link>
										</div>
									</Slider>
									<Link to="/team/name" className="view-all">View All Team</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="procces-section">
					<Container>
						<Row>
							<Col md={12}>
							<div className="procces-wrapper">
								<div className="right-bottom-bg"></div>
								<div className="image-block">
									<div className="heading-block">
										<h2><span>Our</span> Procces</h2>
										<h1>How We Provide Our Services</h1>
										<hr />
									</div>
									<div className="images">
										<img className="image" src={AboutImage} alt="About" />
										<img className="image-bg" src={ProccesImageBg} alt="" />
									</div>
								</div>
								<div className="contant-block">
									<p>Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service Our mission is to provide best service</p>
									<div className="step">
										<img src={AuctionImage} alt="" />
										<p><span>01. </span> Arbitration Related Litigations</p>
									</div>
									<div className="step">
										<img src={AuctionImage} alt="" />
										<p><span>02. </span> Arbitration Related Litigations</p>
									</div>
									<div className="step">
										<img src={AuctionImage} alt="" />
										<p><span>03. </span> Arbitration Related Litigations</p>
									</div>
									<Link to="">View Full Procces</Link>
								</div>
							</div>
							</Col>
						</Row>
					</Container>
				</div>
			</DefaultLayout>
		</div>
	);
}
