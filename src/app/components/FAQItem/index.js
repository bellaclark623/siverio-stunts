import React, { Component } from "react";
import classnames from "classnames";

export default class FAQItem extends Component {
  state = { collapsed: true };

  handleButtonOnClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { question, answer } = this.props;

    return (
      <div
        className={classnames({
          faq: true,
          "my-4 mb-5": !this.state.collapsed,
          "faq-collapsed": this.state.collapsed,
          "faq-expanded": !this.state.collapsed
        })}
      >
        <dt>
          <button onClick={this.handleButtonOnClick} className="faq-button">
            {question}
          </button>
        </dt>
        {!this.state.collapsed && (
          <dd className="faq-answer">
            <p>{answer}</p>
          </dd>
        )}
      </div>
    );
  }
}
