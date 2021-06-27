import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import Image1 from './static/image/img1.jpg';
import LeftBottom from './static/image/bg-left-bottom.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/AboutPage.scss';

export class AboutPage extends React.Component {
	render() {
		return (
			<div className="about-page">
				<DefaultLayout>
					<Container>
							<div className="about-wrapper">
								<img
									src={LeftBottom}
									className="right-bottom-bg"
									alt="right bottom bg"
								/>
								<div className="image-block">
									<img
										src={Image1}
										alt="About image"
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
					</Container>
				</DefaultLayout>
			</div>
		)
	}
}