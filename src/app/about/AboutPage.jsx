import React from 'react';
import { DefaultLayout } from '../../containers/index';
import { Container, Row, Col } from 'react-bootstrap';
import './static/AboutPage.scss';

export class AboutPage extends React.Component {
	render() {
		return (
			<div className="about-page">
				<DefaultLayout>
					<Container>
						<Row>
							<Col md={12}>
								<div className="about-wrapper">
									{/* <img
										src={LeftBottom}
										className="right-bottom-bg"
										alt="right bottom bg"
									/> */}
									<div className="contant-block">
										<h2><span>Abo</span>ut Us</h2>
									</div>

									<p>
									<b>Lawyers Nib</b> is a full-service Complete Legal and Business Consultancy Law Firm with a specialization in Civil, Criminal, Corporate, Company, Income Tax, VAT, Customs, Maritime, Banking & Finance, Property and Investment related legal practices. The <b>Lawyers Nib</b> is one of the top Law Firms in Dhaka, Bangladesh and represents both foreign and local clients. The main area of Practice of the Firm in General Litigation (Civil & Criminal), Corporate Law, Commercial Documentations, Foreign Direct Investment, Labour Laws, Commercial Litigation, Tax Consultation, Maritime & Admiralty Affairs, VAT & Customs, Property Disputes, Real Estate & Construction and Arbitration Adjudication. <b>Lawyers Nib</b> is evolving of Eminent & Experienced Lawyers and Consultants, providing one-stop solutions and services to the Clients & Patrons. The Firm also works with a number of Chartered Accountant Firms to provide Financial Consultation to the Individual Clients & Business Entities. <b>Lawyers Nib</b> also has a number of Business Consultants and Professionals, Tax Consultants to provide additional services including corporate tax advisory services, company registration, start-up & business licensing services, HR dispute resolution, various claim settlements, etc. The lawyers working as partners, associates and paralegals of <b>Lawyers Nib</b> are highly qualified having both local and foreign qualifications and credentials. Lawyers and consultants of <b>Lawyers Nib</b> are worth of experience and knowledge in several matters including (but not limited to) corporate matters, litigation, arbitration, land law matters, real estate matters, family law issues, labour law, writ, banking matters, business set-up, admiralty, shipping, export-import, property disputes and any kind of legal services as may be required. The law firm represents local and international companies, businesses, high net worth individuals, walk-in clients and generally clients from all walks of life. <br /><br />
									Inspired by leading international law firms, <b>Lawyers Nib</b> is structured as a full service and diverse law firm which means that our clients can expect a one-stop service for most of their legal issues. We continue to grow our team to accommodate the needs of our clients & patrons in the changing & challenging demands for sustainable development in the future.<br /><br />
									The <b>Lawyers Nib</b> operates under strict ethical guidelines and maintains international standards in handling its affairs. The firm strives to implement a solution oriented approach to provide fast and efficacious remedies to its clients. <b>Lawyers Nib</b> considers its clients as its biggest assets. Regardless of nationality, religious beliefs or gender orientation, our clients can expect a uniform and consistent level of service at all times.
									</p>
									<h2 className="philosophy-title">Our Philosophy</h2>
									<div className="philosophy-block">
										<Row>
											<Col xs={6} md={4}>
												<div class="serv-section-2">
													<div class="serv-section-2-icon"></div>
														<div class="serv-section-desc">
															<h4>THE LAW COMES FIRST</h4>
															<h5>Our first and foremost focus is to ensure that all our advice are in compliance with the law and our clients do not fail to comply with any legal requirement while we are providing the legal service.</h5>
														</div>
													<div class="section-heading-line-left"></div>
												</div>
											</Col>
											<Col xs={6} md={4}>
												<div class="serv-section-2">
													<div class="serv-section-2-icon"></div>
														<div class="serv-section-desc">
															<h4>HONEST COMMUNICATION</h4>
															<h5>We prioritize in maintaining transparency with the client regarding all affairs so that clients are never distressed due to our lack of communication.</h5>
														</div>
													<div class="section-heading-line-left"></div>
												</div>
											</Col>
											<Col xs={6} md={4}>
												<div class="serv-section-2">
													<div class="serv-section-2-icon"></div>
														<div class="serv-section-desc">
															<h4>COMMITTED TO EXCELLENCE</h4>
															<h5>In CLP, we commit ourselves fully to our clients. We are totally client focused and clients matters the most to us. We give major importance to how we deal with our client.</h5>
														</div>
													<div class="section-heading-line-left"></div>
												</div>
											</Col>
											<Col xs={6} md={4}>
												<div class="serv-section-2">
													<div class="serv-section-2-icon"></div>
														<div class="serv-section-desc">
															<h4>CLIENT FOCUSED APPROACH</h4>
															<h5>Regardless of the client’s background, we take a non-judgmental approach to help the client because it is the rights of the clients that matter the most when they walk through our door.</h5>
														</div>
													<div class="section-heading-line-left"></div>
												</div>
											</Col>
											<Col xs={6} md={4}>
												<div class="serv-section-2">
													<div class="serv-section-2-icon"></div>
														<div class="serv-section-desc">
															<h4>BOUND BY OUR CODES</h4>
															<h5>We have taken an oath to protect the interests of those who are the most vulnerable and to ensure justice for those who are deprived of it.</h5>
														</div>
													<div class="section-heading-line-left"></div>
												</div>
											</Col>
											<Col xs={6} md={4}>
												<div class="serv-section-2">
													<div class="serv-section-2-icon"></div>
														<div class="serv-section-desc">
															<h4>TIME IS EVERYTHING</h4>
															<h5>We do not take delays favorably. Our aim is to deliver results in the shortest possible time which has earned us respect from our esteemed clientele.</h5>
														</div>
													<div class="section-heading-line-left"></div>
												</div>
											</Col>
										</Row>
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