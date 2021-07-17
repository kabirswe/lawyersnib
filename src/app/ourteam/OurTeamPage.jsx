import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import LeftBottom from './static/image/bg-left-bottom.svg';
import GrayBar from './static/image/gray-bar.svg';
import User from './static/image/user.jpg';
import MosiurRahman from './static/image/team/Mosiur-Rahman.jpg';
import MohammadShaheenAkter from './static/image/team/Mohammad-Shaheen-Akter.jpg';
import HabiburRahman from './static/image/team/Habibur-Rahman.png';
import MostafizurRahman from './static/image/team/Mostafizur-Rahman.png';
import ShahNuri from './static/image/team/Shah-Nuri.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/OurTeamPage.scss';

export const OurTeamPage = () => {
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
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			</DefaultLayout>
		</div>
	)
}
