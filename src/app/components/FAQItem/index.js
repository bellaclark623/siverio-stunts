import React, { Component, Fragment } from "react";

export default class FAQItem extends Component {
  state = { collapsed: true };

  handleButtonOnClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { question, answer } = this.props;

    return (
      <Fragment>
        <dt>
          <button onClick={this.handleButtonOnClick} className="faq-button">
            {question}
          </button>
        </dt>
        {!this.state.collapsed && (
          <dd>
            <p>{answer}</p>
          </dd>
        )}
      </Fragment>
    );
  }
}
