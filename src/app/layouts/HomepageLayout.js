import React from "react";
import Page from "../components/page";

import apple from "../assets/app-store-badge.svg";
import android from "../assets/google-play-badge.svg";

import "./HomepageLayout.css";

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
          <h1>Servio Stunts Stunt Directory</h1>
          <p>
            Download our app on iOS or Android to get into the stunt industry
          </p>
          <a href="/credits">
            <div className="badge-wrapper">
              <a href="https://itunes.apple.com/us/app/siverio-stunt/id1074190134?mt=8">
                <img
                  src={apple}
                  alt="Apple Store Badge"
                  className="apple-badge"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.siveriostunt">
                <img
                  src={android}
                  alt="Play Store Badge"
                  className="play-badge"
                />
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
    {children}
  </Page>
);
