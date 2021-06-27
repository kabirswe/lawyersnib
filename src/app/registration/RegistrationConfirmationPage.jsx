import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import ApiServices from "../../networks/ApiServices";
import AxiosServices from "../../networks/AxiosService";
import { AuthLayout } from '../../containers/index';
import './static/RegistrationPage.scss';
const axios = require('axios');

export const RegistrationConfirmationPage = () => {
	const registrationData	= useSelector((state) => state.registrationSlice);
	const sendAgain = () => {
		console.log('sendAgain');
		const data = {
			'medium': registrationData.registrationList.data.formData.medium,
			'emailOrPhone': registrationData.registrationList.data.formData.emailOrPhone,
		};
		AxiosServices.post(ApiServices.RESEND_CONFIRMATION_CODE, data, false)
          .then((response) => {
            console.log(response);
          })
          .catch(error => error.response.data.message);
	};

	return (
		<div className="forget-password-page">
			<AuthLayout>
				<div className="forget-password-container">
					<div className="forget-password-wrapper">
						<h2>Registration Completed Successfully!</h2>
						<p className="confirm">Confirm your registration by clicking on the link sent in E-mail and completing your profile.</p>
						<p className="confirm-last">{registrationData.registrationList.data.data.data.CodeDeliveryDetails.Destination}</p>
						<div className="action-block">
							<button type="button">
								<Link
									to='#'
									onClick={(e) => {
										window.location = 'mailto:' + registrationData.registrationList.data.data.data.CodeDeliveryDetails.Destination + '';
										e.preventDefault();
									}}
								>Check Email</Link>
							</button>
							<div className="link-block">
								<Link
									to="#"
									onClick={(e) => {
										sendAgain();
										e.preventDefault();
									}}
								>Didn’t get the email! <span> Send Again</span></Link>
								<Link to="/login">Contact Support</Link>
							</div>
						</div>
					</div>
					<Link to="/login" className="login-link">Go back to the <span>Log In</span></Link>
				</div>
			</AuthLayout>
		</div>
	)
}
