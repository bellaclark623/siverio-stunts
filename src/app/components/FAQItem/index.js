import React, { Fragment } from "react";

export default ({ question, answer }) => (
  <Fragment>
    <dt>
      <button className="faq-button">{question}</button>
    </dt>
    <dd>
      <p>{answer}</p>
    </dd>
  </Fragment>
);
