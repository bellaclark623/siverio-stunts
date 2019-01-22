import React from "react";
import { Route, Switch } from "react-router-dom";
// import AuthenticatedRoute from '../components/authenticated-route';
// import UnauthenticatedRoute from '../components/unauthenticated-route';
import Loadable from "react-loadable";

import NotFound from "./not-found";

const Home = Loadable({
  loader: () => import("./home"),
  loading: () => null,
  modules: ["home"]
});
const AboutManny = Loadable({
  loader: () => import("./about-manny"),
  loading: () => null,
  modules: ["about-manny"]
});
const AboutStunts = Loadable({
  loader: () => import("./about-stunts"),
  loading: () => null,
  modules: ["about-stunts"]
});
const AboutHistory = Loadable({
  loader: () => import("./about-history"),
  loading: () => null,
  modules: ["about-history"]
});

const Services = Loadable({
  loader: () => import("./services"),
  loading: () => null,
  modules: ["services"]
});

const Portfolio = Loadable({
  loader: () => import("./portfolio"),
  loading: () => null,
  modules: ["portfolio"]
});

const Media = Loadable({
  loader: () => import("./media"),
  loading: () => null,
  modules: ["media"]
});

const Contact = Loadable({
  loader: () => import("./contact"),
  loading: () => null,
  modules: ["contact"]
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
    <Route exact path="/" component={Home} />
    <Route exact path="/about/manny-siverio" component={AboutManny} />
    <Route exact path="/about/stunt-work" component={AboutStunts} />
    <Route
      exact
      path="/about/siverio-stunts-history"
      component={AboutHistory}
    />
    <Route exact path="/services" component={Services} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/media" component={Media} />
    <Route exact path="/contact" component={Contact} />

    {/* <Route exact path="/profile/:id" component={Profile} /> */}

    {/* <AuthenticatedRoute exact path="/dashboard" component={Dashboard} /> */}

    {/* <UnauthenticatedRoute exact path="/login" component={Login} /> */}
    {/* <AuthenticatedRoute exact path="/logout" component={Logout} /> */}

    <Route component={NotFound} />
  </Switch>
);
