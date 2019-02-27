// The basics
import React, { Component } from "react";
import { withRouter } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";

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
            {this.state.contentWrapper && (
              <ParallaxProvider scrollContainer={this.state.contentContainer}>
                <main>
                  <Routes
                    contentContainer={this.state.contentContainer}
                    contentWrapper={this.state.contentWrapper}
                  />
                </main>
                <Footer current={this.props.location.pathname} />
              </ParallaxProvider>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
