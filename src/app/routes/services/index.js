import React from "react";
import InteriorLayout from "../../layouts/InteriorLayout";

import "./services.css";

export default props => (
  <InteriorLayout
    id="services"
    title="Services"
    description="This is about really cool stuff."
    {...props}
    className="services-page"
    subheading={false}
  >
    <p>What we're all about</p>
  </InteriorLayout>
);
