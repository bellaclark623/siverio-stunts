import React from "react";
import Page from "../components/page";

export default ({ id, children, title, description }) => (
  <Page id={id} title={title} description={description}>
    <div className="hero" />
    {children}
  </Page>
);
