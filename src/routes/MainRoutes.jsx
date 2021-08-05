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
    exact: true,
    component: LoginPage
  },
  {
    path: "/our-team",
    exact: true,
    component: OurTeamPage
  },
  {
    path: "/team/:id",
    exact: true,
    component: TeamDetailPage
  },
  {
    path: "/contact",
    exact: true,
    component: ContactPage
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage
  },
  {
    path: "/services",
    exact: true,
    component: ServicesPage
  },
  {
    path: "/login-phone",
    exact: true,
    component: LoginPhonePage
  },
  {
    path: "/forget-password",
    exact: true,
    component: ForgetPasswordPage
  },
  {
    path: "/forget-password-phone",
    exact: true,
    component: ForgetPasswordPhonePage
  },
  {
    path: "/forget-password-confirm",
    exact: true,
    component: ForgetPasswordConfirmPage
  },
  {
    path: "/password-reset",
    exact: true,
    component: PasswordResetPage
  },
  {
    path: "/registration",
    exact: true,
    component: RegistrationPage
  },
  {
    path: "/mentor-registration",
    exact: true,
    component: MentorRegistrationPage
  },
  {
    path: "/registration-confirmation",
    exact: true,
    component: RegistrationConfirmationPage
  },
  {
    path: "/registration-phone-confirmation",
    exact: true,
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