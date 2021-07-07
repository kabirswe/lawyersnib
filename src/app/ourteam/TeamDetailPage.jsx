import React from 'react';
import { Link, useParams } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import GrayBar from './static/image/gray-bar.svg';
import User from './static/image/user.jpg';
import LeftBgImage from './static/image/profile-bd.png';
import MohammadShaheenAkter from './static/image/team/Mohammad-Shaheen-Akter.jpg';
import MohammadShaheenAkter2 from './static/image/team/Mohammad-Shaheen-Akter2.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/TeamDetailPage.scss';

export const TeamDetailPage = () => {

	const profileData = [
		{
			id: "Mohammad-Shaheen-Akter",
			name: "Mohammad Shaheen Akter",
			designation: "Advocate Income Tax & Company Consultant",
			image: MohammadShaheenAkter,
			about: "Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt",
		},
		{
			id: "Mohammad-Shaheen-Akter2",
			name: "Mohammad Shaheen Akter 2",
			designation: "Advocate Income Tax & Company Consultant 2",
			image: MohammadShaheenAkter2,
			about: "Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt",
		}
	];

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
							{profileData.filter(val => id === val.id).map((item, index) => (
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
											<h1>{item.name}</h1>
											<p>{item.designation}</p>
											<p className="note">{item.about}</p>
										</div>
									</div>
									<div className="experience-block">
										<p>One of the most difficult parts in writing a resume is composing the descriptions of your jobs, volunteer work, projects, and other relevant experiences. Each description of your work history and volunteer experience should be clear and concise, yet descriptive. After reading your description, a prospective employer should know exactly what your responsibilities were, what skills you have developed, where your strengths lie, and what you have achieved.

										Here are some tips to help you write a concise and informative description:

										Begin each item by stating the name of the place, location, dates, and job title (e.g. manager, volunteer) List experiences in reverse chronological order (most current experience first).
										Describe your responsibilities in concise statements led by strong verbs. Focus on those skills and strengths that you possess and that you have identified as being important to your field. Try to incorporate industry specific key words. Show potential employers exactly how you will fit their position and their company. Click here for Sample Action Words (PDF).
										Be sure to vary your action words. You do not want all your descriptions to sound the same. Use present tense for those activities which are ongoing and past tense for those with which you are no longer involved.
										Avoid using "I," "and," "the," and the use of any pronouns and prepositions.
										Whenever possible, quantify your accomplishments and responsibilities. That is, use numbers, amounts, dollar values, and percentages (e.g., "Increased monthly sales by forty percent," "Supervised and trained five new employees," "Handled daily receipts totaling $3000," "Designed 14 costumes for local production of").
										Remember: You should spell out numbers under 10 and use numeric symbols for numbers 10 and over. However, there are always exceptions.
										Avoid summarizing or describing what a company or organization you worked with did or does. Describe your responsibilities and accomplishments in relationship to the job/organization, not the job/organization itself.
										Limit your description to the three or four most important points.
										Example:

										The Swim Club, Anywhere, PA
										Assistant Manager/Head Lifeguard
										Summers 20XX-20XX
										Ensured safety of patrons and guests; resolved patron concerns
										Supervised and trained six lifeguards on swim club policies and rules
										Developed and maintained schedules for lifeguards, private swim lessons, and pool functions using Excel
										Assisted manager in overall swim club operations
										Check out some of Steinbright's resume samples to gather ideas on how to market your experiences and talents.
										</p>
									</div>
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