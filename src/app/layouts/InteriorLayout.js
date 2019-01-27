import React, { Component } from "react";
import Page from "../components/page";

export default class InteriorLayout extends Component {
  state = { showBackToTop: null };

  componentDidMount = () => {
    const { contentWrapper } = this.props;
    contentWrapper.addEventListener("scroll", this.onContentWrapperScroll);
  };

  componentWillUnmount = () => {
    const { contentWrapper } = this.props;
    contentWrapper.removeEventListener("scroll", this.onContentWrapperScroll);
  };

  onContentWrapperScroll = event => {
    if (!this.state.showBackToTop && event.target.scrollTop > 200) {
      this.setState({ showBackToTop: true });
    } else if (this.state.showBackToTop && event.target.scrollTop < 200) {
      this.setState({ showBackToTop: false });
    }
  };

  render() {
    const { id, children, title, description } = this.props;

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
        <div className="InteriorLayout-subheading" id="top">
          <div className="container py-4">
            <div className="row">
              <div className="col-12">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-4 pb-5">{pageBody}</div>
        <a href="#top" id="back-to-top" className={activeToggle}>
          Back to Top
        </a>
      </Page>
    );
  }
}
