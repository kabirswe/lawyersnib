import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  HashRouter
} from "react-router-dom";
import { HomePage } from '../app/home/index';
import { OurTeamPage, TeamDetailPage } from '../app/ourteam/index';
import { ContactPage } from '../app/contact/index';
import { AboutPage } from '../app/about/index';
import { ServicesPage } from '../app/services/index';
import { LoginPage, LoginPhonePage } from '../app/login/index';
import {
  ForgetPasswordPage,
  ForgetPasswordPhonePage,
  ForgetPasswordConfirmPage
} from '../app/forget-password/index';
import { PasswordResetPage } from '../app/password-reset/index';
import {
  RegistrationPage,
  MentorRegistrationPage,
  RegistrationConfirmationPage,
  RegistrationPhoneConfirmationPage
} from '../app/registration/index';
import ManageAccess from "./ManageAccess";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  // {
  //   path: "/home",
  //   exact: true,
  //   component: HomePage
  // },
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/our-team",
    component: OurTeamPage
  },
  {
    path: "/team/:id",
    component: TeamDetailPage
  },
  {
    path: "/contact",
    component: ContactPage
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/services",
    component: ServicesPage
  },
  {
    path: "/login-phone",
    component: LoginPhonePage
  },
  {
    path: "/forget-password",
    component: ForgetPasswordPage
  },
  {
    path: "/forget-password-phone",
    component: ForgetPasswordPhonePage
  },
  {
    path: "/forget-password-confirm",
    component: ForgetPasswordConfirmPage
  },
  {
    path: "/password-reset",
    component: PasswordResetPage
  },
  {
    path: "/registration",
    component: RegistrationPage
  },
  {
    path: "/mentor-registration",
    component: MentorRegistrationPage
  },
  {
    path: "/registration-confirmation",
    component: RegistrationConfirmationPage
  },
  {
    path: "/registration-phone-confirmation",
    component: RegistrationPhoneConfirmationPage
  }
];

export const MainRoutes = () => {
  return (
    <Router>
        <Switch>
          {routes.map((route, i) => (
            <ManageAccess
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
          ))}
        </Switch>
    </Router>
  );
}