import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import GrayBar from './static/image/gray-bar.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/OurTeamPage.scss';
import {ProfileData} from './team';

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
							{ProfileData.map((item, index) => (
								<div key={index} className="team-block">
									<Link to={`/team/${item.id}`}>
										<div className="image">
											<img src={item.image} alt="" />
										</div>
										<div className="content">
											<h2>{item.name}</h2>
											<p>{item.listDesignation}</p>
											<p>{item.Advocate ? item.Advocate:item.Consultant}</p>
										</div>
									</Link>
								</div>
								))}
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			</DefaultLayout>
		</div>
	)
}
