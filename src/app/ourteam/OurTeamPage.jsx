import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import LeftBottom from './static/image/bg-left-bottom.svg';
import GrayBar from './static/image/gray-bar.svg';
import User from './static/image/user.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/OurTeamPage.scss';

export class OurTeamPage extends React.Component {
	render() {
		return (
			<div className="our-team-page">
					<img
						src={GrayBar}
						className="left-bottom-bg"
						alt="top right bg"
					/>
				<DefaultLayout>
				<Container>
					<Row>
						<Col md={12}>
							<div className="contant-area">
								<h2><span>OUR</span> TEAM</h2>
								<h1>Committed To Team Excellence</h1>
								<hr />
								<div className="team-container">
									<div className="team-block">
										<Link to="/team/name">
											<div className="image">
												<img src={User} alt="" />
											</div>
											<div className="content">
												<h2>Mohammad Shaheen Akter</h2>
												<p>Advocate</p>
												<p>Income Tax & Company Consultant</p>
											</div>
										</Link>
									</div>
									<div className="team-block">
										<Link to="/team/name">
											<div className="image">
												<img src={User} alt="" />
											</div>
											<div className="content">
												<h2>Mohammad Shaheen Akter</h2>
												<p>Advocate</p>
												<p>Income Tax & Company Consultant</p>
											</div>
										</Link>
									</div>
									<div className="team-block">
										<Link to="/team/name">
											<div className="image">
												<img src={User} alt="" />
											</div>
											<div className="content">
												<h2>Mohammad Shaheen Akter</h2>
												<p>Advocate</p>
												<p>Income Tax & Company Consultant</p>
											</div>
										</Link>
									</div>
									<div className="team-block">
										<Link to="/team/name">
											<div className="image">
												<img src={User} alt="" />
											</div>
											<div className="content">
												<h2>Mohammad Shaheen Akter</h2>
												<p>Advocate</p>
												<p>Income Tax & Company Consultant</p>
											</div>
										</Link>
									</div>
									<div className="team-block">
										<Link to="/team/name">
											<div className="image">
												<img src={User} alt="" />
											</div>
											<div className="content">
												<h2>Mohammad Shaheen Akter</h2>
												<p>Advocate</p>
												<p>Income Tax & Company Consultant</p>
											</div>
										</Link>
									</div>
									<div className="team-block">
										<Link to="/team/name">
											<div className="image">
												<img src={User} alt="" />
											</div>
											<div className="content">
												<h2>Mohammad Shaheen Akter</h2>
												<p>Advocate</p>
												<p>Income Tax & Company Consultant</p>
											</div>
										</Link>
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
