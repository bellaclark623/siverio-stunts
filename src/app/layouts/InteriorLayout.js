import React, { Component } from "react";
import Page from "../components/page";
import classnames from "classnames";
import { ParallaxBanner } from "react-scroll-parallax";
import debounce from "../../utils";

import "./InteriorLayout.css";

export default class InteriorLayout extends Component {
  state = {
    showBackToTop: null,
    shouldListenToScroll: false
  };

  componentDidMount = () => {
    const { contentContainer, contentWrapper } = this.props;

    if (contentWrapper.clientHeight > contentContainer.clientHeight + 200) {
      this.setState({ shouldListenToScroll: true });
    }

    if (this.state.shouldListenToScroll || this.props.shouldListenToScroll) {
      contentContainer.addEventListener(
        "scroll",
        debounce(this.onContentContainerScroll, 50)
      );
    }
  };

  componentWillUnmount = () => {
    const { contentContainer } = this.props;

    if (this.state.shouldListenToScroll || this.props.shouldListenToScroll) {
      contentContainer.removeEventListener(
        "scroll",
        debounce(this.onContentContainerScroll, 50)
      );
    }
  };

  onContentContainerScroll = event => {
    if (!this.state.showBackToTop && event.target.scrollTop > 200) {
      this.setState({ showBackToTop: true });
    } else if (this.state.showBackToTop && event.target.scrollTop < 200) {
      this.setState({ showBackToTop: false });
    }
  };

  render() {
    const {
      id,
      children,
      title,
      description,
      className,
      backgroundImage
    } = this.props;

    const pageBody = children;

    let activeToggle;

    if (this.state.showBackToTop === null) {
    } else if (!this.state.showBackToTop) {
      activeToggle = "inactive";
    } else {
      activeToggle = "active";
    }

    return (
      <Page id={id} title={title} description={description}>
        <div className={classnames("InteriorLayout-subheading", className)}>
          <ParallaxBanner
            layers={[
              {
                image: backgroundImage,
                amount: 0.5,
                slowerScrollRate: false
              },
              {
                children: (
                  <h3 className="InteriorLayout-subheadingBody">{title}</h3>
                ),
                expanded: false,
                amount: 0.5,
                slowerScrollRate: false
              }
            ]}
            style={{
              height: "calc(100vh - 72px - 15vh)"
            }}
          />
        </div>
        <div className="container py-5">{pageBody}</div>
        <button
          onClick={e => {
            document.getElementById("content-container").scrollTop = 0;
          }}
          id="back-to-top"
          className={activeToggle}
        >
          Back to Top
        </button>
      </Page>
    );
  }
}

InteriorLayout.defaultProps = {
  subheading: true
};
