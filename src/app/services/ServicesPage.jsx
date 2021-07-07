import React from 'react';
import { Link } from "react-router-dom";
import { DefaultLayout } from '../../containers/index';
import LeftBottom from './static/image/bg-left-bottom.svg';
import { Container } from 'react-bootstrap';
import './static/ServicesPage.scss';

export class ServicesPage extends React.Component {
	render() {
		return (
			<div className="services-page">
				<DefaultLayout>
					<Container>
						<div className="services-wrapper">
							<div className="yellow-box"></div>
							<div className="gray-box"></div>
							<div className="blue-box"></div>
							<div className="service-box">
								<h2><span>OUR</span> SERVICES</h2>
								<h1>Demand First-Rate Best & Services</h1>
							</div>
							<div className="service-list">
								{/* section 1 */}
								<div className="row how-it-works d-flex">
									<div className="col-2 text-center bottom d-inline-flex justify-content-center">
										<div className="circle font-weight-bold">1</div>
									</div>
									<div className="col-8">
										<h4>GENERAL LITIGATION</h4>
										<h5>SUBORDINATE COURT LITIGATION Civil</h5>
										<ul>
											<li>Suit for Declaration</li>
											<li>Suit for Rectification of Instrument</li>
											<li>Suit for Recession of Instrument</li>
											<li>Suit for Cancellation of Instrument</li>
											<li>Suit for Permanent Injunction</li>
											<li>Suit for Specific Performance of Contract</li>
											<li>Suit for Realization of Money</li>
											<li>Suit for Correction of Record of Rights</li>
											<li>Bankruptcy Related Suits</li>
											<li>Suit for Succession Certificate</li>
											<li>Suit for Probate of Wills</li>
											<li>Suit for Recovery of Khas Possession</li>
											<li>Suit relating to Premises Rent Act</li>
											<li>Suit for Easement</li>
											<li>Suit for Partition</li>
											<li>Appeal, Review and Revision arising out of all of these suits.</li>
										</ul>
										<h5>Artha Rin</h5>
										<ul>
											<li>Artha Rin Suits</li>
											<li>Artha Execution Suits</li>
										</ul>
										<h5>Arbitration Related Litigations</h5>
										<ul>
											<li>Arbitration Miscellaneous Case for appointment of Arbitrator</li>
											<li>Arbitration Miscellaneous Case for Setting Aside of Arbitral Award</li>
											<li>Arbitration Miscellaneous Case for Injunction</li>
											<li>Arbitration Execution Case for Execution of Arbitral Award</li>
										</ul>
										<h5>Intellectual Property Related Litigation</h5>
										<ul>
											<li>Suit for the protection of trademark</li>
											<li>Suit for the protection of copyright</li>
											<li>Suit for the protection of patent</li>
										</ul>
										<h5>Family Law Matters</h5>
										<ul>
											<li>Suit for Dower</li>
											<li>Suit for Maintenance</li>
											<li>Suit for Guardianship and Custody of Minor Children</li>
											<li>Suit for Dissolution of Marriage</li>
											<li>Family Execution and Appeal cases arising out of any of the    abovementioned suits.</li>
										</ul>
										<h5>Others</h5>
										<ul>
											<li>Labour Court</li>
											<li>Land Appellate Board</li>
											<li>Bangladesh Energy Regulatory Commission</li>
											<li>Administrative Tribunal</li>
											<li>VAT Appellate Tribunal</li>
											<li>Food Safety Court</li>
											<li>District Magistrate’s Court</li>
											<li>Executive Magistrate’s Court</li>
											<li>National Consumer Rights Protection Directorate</li>
										</ul>
										<h5>Criminal (All Criminal Cases under)</h5>
										<ul>
											<li>The Penal Code, </li>
											<li>Anti-Corruption Commission Act, </li>
											<li>Digital Security Act, </li>
											<li>The Negotiable Instruments Act, </li>
											<li>The Prevention of Violence Against Women and Children (Nari O Shishu Nirjatan Daman)</li> 
											<li>The Prevention of Dower (Joutuk Nirodh) Act, </li>
											<li>Money Laundering Prevention Act, </li>
											<li>The Narcotics Control (Madokdrobbo Niyontron) Act, </li>
											<li>The Arms Act, </li>
											<li>The Explosive Substances Act,</li>
											<li>The Prevention and Suppression of Human Trafficking (Manob Pachar Protirodh O Domon)</li> 
											<li>The Passport Rules, </li>
											<li>Real Estate Development and Management (Real Estate Unnoyon O Bebosthapona) Act, </li>
											<li>The Anti-Terrorism (Sontras Birodhi) Ain.</li>
											<li>All Non-FIR Cases.</li>
											<li>All permission Cases.</li>
										</ul>
										<h5>SUPREME COURT OF BANGLADESH(High Court Division)</h5>
										<ul>
											<li>Bail applications</li>
											<li>Writ Petitions</li>
											<li>Tort and Compensation</li>
											<li>Service Matters</li>
											<li>Admiralty and Shipping</li>
											<li>Public law and Judicial Review</li>
											<li>Income Tax Reference</li>
											<li>VAT and Customs Appeals</li>
											<li>All Civil and Criminal Appeals</li>
											<li>All Civil and Criminal Revision</li>
										</ul>
										<h5>Appellate Division</h5>
										<ul>
											<li>Appeal against Orders and Judgments of the High Court Division</li>
											<li>Appeals against judgments of Administrative Appellate Tribunals</li>
										</ul>
									</div>
								</div>
								{/* path between 1-2 */}
								<div className="row timeline">
									<div className="col-2">
										<div className="corner top-right"></div>
									</div>
									<div className="col-8">
										<hr/>
									</div>
									<div className="col-2">
										<div className="corner left-bottom"></div>
									</div>
								</div>
								{/* section 2 */}
								<div className="row justify-content-end how-it-works d-flex">
									<div className="col-8 text-right">
										<h4>CORPORATE RELATED SERVICES</h4>
										<ul className="right">
											<li>Commercial Contracts</li>
											<li>Corporate Advisory</li>
											<li>Corporate Governance, Compliance and Regulatory</li>
											<li>Corporate Restructuring</li>
											<li>Joint Venture</li>
											<li>Mergers and Acquisitions</li>
											<li>Private Equity</li>
											<li>International Contracts</li>
											<li>Debt Recovery</li>
											<li>Banking and Financial Institutional Services</li>
											<li>Banking and Finance</li>
											<li>Corporate Finance</li>
											<li>Investment Funds</li>
											<li>Capital Markets</li>
											<li>Insolvency, CIB, Auction</li>
											<li>Facilitating loan financing projects</li>
										</ul>
										<h4>Incorporation, Registration and Licensing</h4>
										<ul className="right">
											<li>Partnership Firm Registration & Re-construction</li>
											<li>Company (Private & Public) Formation and Related Services</li>
											<li>Foundation, Society & Trust Registration, Formation and Related Services</li>
											<li>Trade License</li>
											<li>Import and Export License</li>
											<li>Indenting License</li>
											<li>Fire License</li>
											<li>Industrial License</li>
											<li>Environment License (NOC)</li>
											<li>Firearms License</li>
											<li>Industrial & Garments related other License</li>
										</ul>
									</div>
									<div className="col-2 text-center full d-inline-flex justify-content-center">
										<div className="circle font-weight-bold">2</div>
									</div>
								</div>
								{/* path between 2-3 */}
								<div className="row timeline">
									<div className="col-2">
										<div className="corner right-bottom"></div>
									</div>
									<div className="col-8">
										<hr/>
									</div>
									<div className="col-2">
										<div className="corner top-left"></div>
									</div>
								</div>
								{/* section 3 */}
								<div className="row how-it-works d-flex">
									<div className="col-2 text-center top d-inline-flex justify-content-center">
										<div className="circle font-weight-bold">3</div>
									</div>
									<div className="col-8">
										<h4>ADVISORY AND CONSULTANCY</h4>
										<h5>IP, Media and Technology</h5>
										<ul>
											<li>Trademark, Design, Copyright and Patent</li>
											<li>Technology and E-commerce</li>
											<li>Media and Entertainment</li>
											<li>Cyber Security</li>
											<li>Data Protection</li>
											<li>Intellectual Property</li>
											<li>Business Process Outsourcing</li>
											<h5>Employment and Labour Law</h5>
											<li>Employment Contract and Relations</li>
											<li>Employment Disputes</li>
											<li>Immigration (Employment)</li>
											<li>Workforce Restructuring and Termination of Employment</li>
											<li>Workplace Compliance and Investigation </li>
											<li>Labour Policy</li>
										</ul>
										<h5>Maritime Consultancies include</h5>
										<ul>
											<li>Arrest of ship & release of ship</li>
											<li>In rem claims against vessels and other property</li>
											<li>Claims for unpaid bunker and lost, damaged or hazardous cargo</li>
											<li>Claims arising out of collisions, grounding etc</li>
											<li>Claims arising out of salvage and wreck removal</li>
											<li>Claims for freight, demurrage etc.</li>
											<li>Complex marine insurance claim, H& M insurance, P & I settlements</li>
											<li>General Average</li>
											<li>Wrongful death and personal injury</li>
											<li>Claims arising out of vessel sales, financing, full range of shipping, logistics, towage, vessel charter, marine terminal, stevedoring and other contract disputes.</li>
											<li>Oil spills, pollution and product liability claims</li>
											<li>Claims against freight forwarders & NVOCCs</li>
											<li>Registration, license, and inspection procedures for ships</li>
											<li>Shipping contracts</li>
											<li>Maritime insurance and marine insurance</li>
											<li>Shipping procedures of goods and passengers</li>
											<li>Marine commerce and navigation</li>
											<li>Salvage</li>
											<li>Maritime pollution</li>
											<li>Seafarers’ rights</li>
											<li>Legal job duties of those that do maritime work (shipowners, seamen, etc.)</li>
										</ul>
									</div>
								</div>
								{/* path between 3-4 */}
								<div className="row timeline">
									<div className="col-2">
										<div className="corner top-right"></div>
									</div>
									<div className="col-8">
										<hr/>
									</div>
									<div className="col-2">
										<div className="corner left-bottom"></div>
									</div>
								</div>
								{/* section 4 */}
								<div className="row justify-content-end how-it-works d-flex">
									<div className="col-8 text-right">
										<h4> TAX, VAT AND CUSTOMS</h4>
										<ul className="right">
											<li>Individual Income Tax Services</li>
											<li>Company Income Tax Services</li>
											<li>Corporate (Company Director’s, Employees as a whole)</li>
											<li>VAT Return Services</li>
											<li>Customs</li>
										</ul>
									</div>
									<div className="col-2 text-center full d-inline-flex justify-content-center">
										<div className="circle font-weight-bold">4</div>
									</div>
								</div>
								{/* path between 4-5 */}
								<div className="row timeline">
									<div className="col-2">
										<div className="corner right-bottom"></div>
									</div>
									<div className="col-8">
										<hr/>
									</div>
									<div className="col-2">
										<div className="corner top-left"></div>
									</div>
								</div>
								{/* section 5 */}
								<div className="row how-it-works d-flex">
									<div className="col-2 text-center top d-inline-flex justify-content-center">
										<div className="circle font-weight-bold">5</div>
									</div>
									<div className="col-8">
										<h4>LAND & ASSET MANAGEMENT</h4>
										<ul>
											<li>Land Transfer Services</li>
											<li>Land  & Property Development & Real Estate</li>
											<li>Vetting, Verification & Documentation</li>
											<li>Asset Management and Funds</li>
											<li>Portfolio Management</li>
											<li>Venture Capital Management</li>
											<li>Real Estate</li>
											<ul>
												<li>Corporate Real Estate</li>
												<li>Retail Conveyancing</li>
											</ul>
										</ul>
									</div>
								</div>
								{/* path between 5-6 */}
								<div className="row timeline">
									<div className="col-2">
										<div className="corner top-right"></div>
									</div>
									<div className="col-8">
										<hr/>
									</div>
									<div className="col-2">
										<div className="corner left-bottom"></div>
									</div>
								</div>
								{/* section 6 */}
								<div className="row justify-content-end how-it-works d-flex">
									<div className="col-8 text-right">
										<h4>MISCELLANEOUS LEGAL SERVICES</h4>
										<ul className="right">
											<li>Sponsorship Related services (Students Scholarship)</li>
											<li>Out Of Court (Alternative) Dispute Resolution</li>
											<li>Arbitration</li>
											<li>Construction related disputes</li>
											<li>Matrimonial and Family Disputes</li>
											<li>Professional Liability/ Damages</li>
											<li>Consumer Disputes</li>
											<li>Public And Private Procurement</li>
											<li>Adoption Services</li>
										</ul>
									</div>
									<div className="col-2 text-center full d-inline-flex justify-content-center">
										<div className="circle font-weight-bold">6</div>
									</div>
								</div>
								{/* path between 6-7 */}
								<div className="row timeline">
									<div className="col-2">
										<div className="corner right-bottom"></div>
									</div>
									<div className="col-8">
										<hr/>
									</div>
									<div className="col-2">
										<div className="corner top-left"></div>
									</div>
								</div>
								{/* third section */}
								<div className="row how-it-works d-flex">
									<div className="col-2 text-center top d-inline-flex justify-content-center last">
										<div className="circle font-weight-bold">7</div>
									</div>
									<div className="col-8">
										<h4>FDI TO BANGLADESH</h4>
										<ul>
											<li>Project Finance</li>
											<li>BIDA Permission including Branch Office Regulatory Approvals Management</li>
											<li>Visa recommendation, processing and work permit</li>
											<li>Citizenship</li>
											<li>Corporation Advisory (Corporate Structuring, Services to Employees)</li>
											<li>Accounting & Audit Services</li>
											<li>Permission/licenses/approval from different  authorities</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</DefaultLayout>
			</div>
		)
	}
}