import React from 'react';
import { useParams } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import LeftBgImage from './static/image/profile-bd.png';
import { Container, Row, Col } from 'react-bootstrap';
import './static/TeamDetailPage.scss';
import {ProfileData} from './team';

export const TeamDetailPage = () => {

	let { id } = useParams();
	console.log(id);

	return (
		<div className="team-detail-page">
				<div className="left-bg">
					<img
						src={LeftBgImage}
						className="left-bottom-bg"
						alt="top right bg"
					/>
					<p>about me</p>
				</div>
			<DefaultLayout>
			<Container>
				<Row>
					<Col md={12}>
						<div className="contant-area">
							{ProfileData.filter(val => id === val.id).map((item, index) => (
								<div key={index}>
									<div className="profile-block">
										<div className="image-block">
											<span className="frame"></span>
											<img
												src={item.image}
												className="left-bottom-bg"
												alt="top right bg"
											/>
										</div>
										<div className="content-block">
											<h1 className="name">
												<span>{item.name}</span>
												<span>{item.degree}</span>
											</h1>
											<p className="title-2">{item.Advocate ? 'Advocate' : 'Consultant'}</p>
											<p>{item.Advocate ? item.Advocate : item.Consultant}</p>
											<div dangerouslySetInnerHTML={{__html: item.description}} />
											{item.lastEducation && (<><p className="title-2">Last Education</p><p>{item.lastEducation && item.lastEducation}</p></>)}
										</div>
									</div>
									<div className="experience-block" dangerouslySetInnerHTML={{__html: item.about}} />
								</div>
							))}
						</div>
					</Col>
				</Row>
			</Container>
			</DefaultLayout>
		</div>
	)
}