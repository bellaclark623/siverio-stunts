// The basics
import React, { Component } from "react";
import { withRouter } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

import "./app.css";

class App extends Component {
  state = {
    contentContainer: null,
    contentWrapper: null
  };

  render() {
    return (
      <div id="app">
        <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        />
        <div
          id="content-container"
          ref={ref =>
            !this.state.contentContainer &&
            this.setState({ contentContainer: ref })
          }
        >
          <div
            id="content-wrapper"
            ref={ref =>
              !this.state.contentWrapper &&
              this.setState({ contentWrapper: ref })
            }
          >
            <Routes
              contentContainer={this.state.contentContainer}
              contentWrapper={this.state.contentWrapper}
            />
            <Footer current={this.props.location.pathname} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
