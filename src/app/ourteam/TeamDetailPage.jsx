import React from 'react';
import { Link, useParams } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import GrayBar from './static/image/gray-bar.svg';
import User from './static/image/user.jpg';
import LeftBgImage from './static/image/profile-bd.png';
import MosiurRahman from './static/image/team/Mosiur-Rahman.jpg';
import MohammadShaheenAkter from './static/image/team/Mohammad-Shaheen-Akter.jpg';
import HabiburRahman from './static/image/team/Habibur-Rahman.png';
import MostafizurRahman from './static/image/team/Mostafizur-Rahman.png';
import ShahNuri from './static/image/team/Shah-Nuri.jpg';
import ApurbaDas from './static/image/team/Apurba-Das.jpg';
import Partho from './static/image/team/Partho.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import './static/TeamDetailPage.scss';

export const TeamDetailPage = () => {

	const profileData = [
		{
			id: "Mosiur-Rahman",
			name: "MD. MOSIUR RAHMAN",
			image: MosiurRahman,
			degree: "MA, MBA, LL.M (Maritime Law)",
			Consultant: "(Tax, VAT, Company & Maritime Affairs)",
			designation: "Advocate Income Tax & Company Consultant",
			description: "<p><b>Founder & Consultant</b><br />Lawyers Nib<br /><b>Founder & Executive Director</b><br />Lawyers Nib Academy<br /><b>Managing Director & CEO</b><br />Aristocrat Construction Limited</p>",
			lastEducation: "LL.M in Maritime Law From Bangabandhu Sheikh Mujibur Rahman Maritime University",
			about: "<h5>PROFILE</h5><hr /><p>Ambitious Consultant and Managing Director with excellent managing and technical skills. Highly effective at promoting positive relationships and building capable teams. Natural team-builder and leader with proven abilities across all levels of organizational management. Business Analyst effective at developing and implementing operational processes and systems. Quickly grasps business priorities to identify optimal personnel and IT solutions. Motivated Business Analyst with technical expertise and business acumen necessary to translate business requirements and objectives into scalable, highly resilient and successful system solutions. Multi-tasking Consultant well-known for successfully taking projects from beginning stages to completion. Commended for consistently meeting new technical challenges and finding solutions to satisfy customer needs. Determined and experienced in building lucrative client relationships and implementing successful processes and procedures. Talented Consultant with excellent client oversight, issue resolution and presentation skills. Highly skilled at juggling multiple tasks and projects. Outstanding motivator possessing first-rate intercommunication skills to work across organizational levels. Talented at developing strategies, setting goals and training employees. Confident and decisive when communicating goals and vision to succeed.</p><br /><br /><h5>WORK HISTORY</h5><hr /><ul><li>Delivered outstanding service to clients to maintain and extend relationship for future business opportunities.</li><li>Developed service plans in consultation with clients, and performed follow-ups assessing quantity and quality of services.</li><li>Created detailed road maps of action items and project goals and generated reports to inform budgeting and planning.</li><li>Supported clients with business analysis, documentation and data modeling.</li><li>Updated stakeholders on key milestones for projects.</li><li>Boosted success of client's organization by improving performance, motivation, job satisfaction, hiring practices, training programs and management systems.</li><li>Authored detailed work plans to meet business priorities and deadlines.</li><li>Developed strategic component development plans to support future projects.</li><li>Researched latest market trends to provide current knowledge to clients.</li><li>Collected confidential financial information from clients to construct comprehensive financial plans.</li><li>Leveraged on-site observation and personal interviews to identify team and individual strengths.</li><li>Maintained customer relationships and responded promptly and accurately to both internal and external questions and requests.</li></ul>"
		},
		{
			id: "Mohammad-Shaheen-Akter",
			name: "MOHAMMAD SHAHEEN AKTER",
			image: MohammadShaheenAkter,
			degree: "MA, MBA, LL.M (Maritime Law)",
			Consultant: "(Tax, VAT, Company & Maritime Affairs)",
			designation: "Advocate Income Tax & Company Consultant",
			description: "<p><b>Founder & Consultant</b><br />Lawyers Nib<br /><b>Founder & Executive Director</b><br />Lawyers Nib Academy<br /><b>Managing Director & CEO</b><br />Aristocrat Construction Limited</p>",
			lastEducation: "LL.M in Maritime Law From Bangabandhu Sheikh Mujibur Rahman Maritime University",
			about: "<h5>PROFILE</h5><hr />"
		},
		{
			id: "Habibur-Rahman",
			name: "MD. Habibur Rahman",
			image: HabiburRahman,
			degree: "MA, MBA, LL.M (Maritime Law)",
			Consultant: "(Tax, VAT, Company & Maritime Affairs)",
			designation: "Advocate Income Tax & Company Consultant",
			description: "<p><b>Founder & Consultant</b><br />Lawyers Nib<br /><b>Founder & Executive Director</b><br />Lawyers Nib Academy<br /><b>Managing Director & CEO</b><br />Aristocrat Construction Limited</p>",
			lastEducation: "LL.M in Maritime Law From Bangabandhu Sheikh Mujibur Rahman Maritime University",
			about: "<h5>PROFILE</h5><hr />"
		},
		{
			id: "Mostafizur-Rahman",
			name: "KAZI MD. MOSTAFIZUR RAHMAN",
			image: MostafizurRahman,
			degree: "MA, MBA, LL.M (Maritime Law)",
			Consultant: "(Tax, VAT, Company & Maritime Affairs)",
			designation: "Advocate Income Tax & Company Consultant",
			description: "<p><b>Founder & Consultant</b><br />Lawyers Nib<br /><b>Founder & Executive Director</b><br />Lawyers Nib Academy<br /><b>Managing Director & CEO</b><br />Aristocrat Construction Limited</p>",
			lastEducation: "LL.M in Maritime Law From Bangabandhu Sheikh Mujibur Rahman Maritime University",
			about: "<h5>PROFILE</h5><hr /><p>Ambitious Consultant &Managing Director with excellent managing and technical skills. Highly effective at promoting positive relationships and building capable teams. Natural team-builder and leader with proven abilities across all levels of organizational management. Business Analyst effective at developing and implementing operational processes and systems. Quickly grasps business priorities to identify optimal personnel and IT solutions. Motivated Business Analyst with technical expertise and business acumen necessary to translate business requirements and objectives into salable, highly resilient and successful system solutions.</p><br />"
		},
		{
			id: "Shah-Nuri",
			name: "MD. SHAH NURI",
			image: ShahNuri,
			degree: "MA, MBA, LL.M (Maritime Law)",
			Consultant: "(Tax, VAT, Company & Maritime Affairs)",
			designation: "Advocate Income Tax & Company Consultant",
			description: "<p><b>Founder & Consultant</b><br />Lawyers Nib<br /><b>Founder & Executive Director</b><br />Lawyers Nib Academy<br /><b>Managing Director & CEO</b><br />Aristocrat Construction Limited</p>",
			lastEducation: "LL.M in Maritime Law From Bangabandhu Sheikh Mujibur Rahman Maritime University",
			about: "<h5>PROFILE</h5><hr /><p>Ambitious Consultant & Managing Director with excellent managing and technical skills. Highly effective at promoting positive relationships and building capable teams. Natural team-builder and leader with proven abilities across all levels of organizational management. Business Analyst effective at developing and implementing operational processes and systems. Quickly grasps business priorities to identify optimal personnel and IT solutions. Motivated Business Analyst with technical expertise and business acumen necessary to translate business requirements and objectives into scalable, highly resilient and successful system solutions.</p><br />"
		},
		{
			id: "Apurba-Das",
			name: "APURBA DAS",
			image: ApurbaDas,
			degree: "MA, MBA, LL.M (Maritime Law)",
			Consultant: "(Tax, VAT, Company & Maritime Affairs)",
			designation: "Advocate Income Tax & Company Consultant",
			description: "<p><b>Founder & Consultant</b><br />Lawyers Nib<br /><b>Founder & Executive Director</b><br />Lawyers Nib Academy<br /><b>Managing Director & CEO</b><br />Aristocrat Construction Limited</p>",
			lastEducation: "LL.M in Maritime Law From Bangabandhu Sheikh Mujibur Rahman Maritime University",
			about: "<h5>PROFILE</h5><hr /><p>Ambitious Coordinator with excellent managing and technical skills. Highly effective at promoting positive relationships and building capable teams. Natural team-builder and leader with proven abilities across all levels of organizational management. Business Analyst effective at developing and implementing operational processes and systems. Motivated Program Analyst with technical expertise and business acumen necessary to translate business requirements and objectives into salable, highly resilient and successful system solutions.</p>"
		},
		{
			id: "Partho",
			name: "Partho",
			image: Partho,
			degree: "MA, MBA, LL.M (Maritime Law)",
			Consultant: "(Tax, VAT, Company & Maritime Affairs)",
			designation: "Advocate Income Tax & Company Consultant",
			description: "<p><b>Founder & Consultant</b><br />Lawyers Nib<br /><b>Founder & Executive Director</b><br />Lawyers Nib Academy<br /><b>Managing Director & CEO</b><br />Aristocrat Construction Limited</p>",
			lastEducation: "LL.M in Maritime Law From Bangabandhu Sheikh Mujibur Rahman Maritime University",
			about: "<h5>PROFILE</h5><hr />"
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
											<h1 className="name">
												<span>{item.name}</span>
												<span>{item.degree}</span>
											</h1>
											<p className="title-2">Consultant</p>
											<p>{item.Consultant}</p>
											<div dangerouslySetInnerHTML={{__html: item.description}} />
											<p className="title-2">Last Education</p>
											<p>{item.lastEducation}</p>
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