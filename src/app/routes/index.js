import React from "react";
import { Route, Switch } from "react-router-dom";
// import AuthenticatedRoute from '../components/authenticated-route';
// import UnauthenticatedRoute from '../components/unauthenticated-route';
import Loadable from "react-loadable";

import NotFound from "./not-found";

const LoadableWithInjectedProps = (config, injectedProps) =>
  Loadable({
    ...config,
    render: (loaded, props) => {
      let Component = loaded.default;
      return <Component {...props} {...injectedProps} />;
    }
  });

const Home = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./home"),
      loading: () => null,
      modules: ["home"]
    },
    injectedProps
  );

const AboutManny = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./about-manny"),
      loading: () => null,
      modules: ["about-manny"]
    },
    injectedProps
  );

const AboutStunts = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./about-stunts"),
      loading: () => null,
      modules: ["about-stunts"]
    },
    injectedProps
  );

const AboutHistory = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./about-history"),
      loading: () => null,
      modules: ["about-history"]
    },
    injectedProps
  );

const Services = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./services"),
      loading: () => null,
      modules: ["services"]
    },
    injectedProps
  );

const Portfolio = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./portfolio"),
      loading: () => null,
      modules: ["portfolio"]
    },
    injectedProps
  );

const Media = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./media"),
      loading: () => null,
      modules: ["media"]
    },
    injectedProps
  );

const Contact = injectedProps =>
  LoadableWithInjectedProps(
    {
      loader: () => import("./contact"),
      loading: () => null,
      modules: ["contact"]
    },
    injectedProps
  );

export default props => (
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
    <Route exact path="/portfolio" component={Portfolio(props)} />
    <Route exact path="/media" component={Media} />
    <Route exact path="/contact" component={Contact} />
    {/* <UnauthenticatedRoute exact path="/login" component={Login} /> */}
    {/* <AuthenticatedRoute exact path="/logout" component={Logout} /> */}
    <Route component={NotFound} />
  </Switch>
);
