import React from "react";
import Page from "../components/page";

export default ({ id, children, title, description }) => (
  <Page id={id} title={title} description={description}>
    <div className="hero">
      <div className="background">
        <video
          playsInline
          autoPlay
          muted
          loop
          // poster="polina.jpg"
          id="bgvid"
        >
          <source src={require("../assets/glass.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="foreground">
        <div className="hero-text-wrapper">
          <h1>Manny Siverio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            ullam? Molestiae animi voluptates inventore debitis.
          </p>
          <a href="/portfolio">
            <button className="primary-button">View Previous Works</button>
          </a>
        </div>
      </div>
    </div>
    {children}
  </Page>
);
