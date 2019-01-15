import React from "react";
import { Route, Switch } from "react-router-dom";
// import AuthenticatedRoute from '../components/authenticated-route';
// import UnauthenticatedRoute from '../components/unauthenticated-route';
import Loadable from "react-loadable";

import NotFound from "./not-found";

const Homepage = Loadable({
  loader: () => import("./homepage"),
  loading: () => null,
  modules: ["homepage"]
});

const About = Loadable({
  loader: () => import("./about"),
  loading: () => null,
  modules: ["about"]
});

const Films = Loadable({
  loader: () => import("./films"),
  loading: () => null,
  modules: ["films"]
});

// const Dashboard = Loadable({
//   loader: () => import('./dashboard'),
//   loading: () => null,
//   modules: ['dashboard']
// });

// const Login = Loadable({
//   loader: () => import('./login'),
//   loading: () => null,
//   modules: ['login']
// });

// const Logout = Loadable({
//   loader: () => import('./logout'),
//   loading: () => null,
//   modules: ['logout']
// });

// const Profile = Loadable({
//   loader: () => import('./profile'),
//   loading: () => null,
//   modules: ['profile']
// });

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/films" component={Films} />

    {/* <Route exact path="/profile/:id" component={Profile} /> */}

    {/* <AuthenticatedRoute exact path="/dashboard" component={Dashboard} /> */}

    {/* <UnauthenticatedRoute exact path="/login" component={Login} /> */}
    {/* <AuthenticatedRoute exact path="/logout" component={Logout} /> */}

    <Route component={NotFound} />
  </Switch>
);
