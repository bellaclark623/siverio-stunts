import React from "react";
import Page from "../components/page";

export default ({ id, children, title, description }) => {
  const pageBody = children;

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
      <a href="#top" id="back-to-top">
        Back to Top
      </a>
    </Page>
  );
};
