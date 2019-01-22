import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import YouTube from "react-youtube";
import HomepageLayout from "../../layouts/HomepageLayout";

function getElementWidth(el) {
  let youtubeWrapperWidth;

  try {
    // Modern browsers
    youtubeWrapperWidth = window
      .getComputedStyle(el, null)
      .getPropertyValue("width");
  } catch (e) {
    // IE fallback
    youtubeWrapperWidth = el.currentStyle.width;
  }

  youtubeWrapperWidth = parseInt(youtubeWrapperWidth.replace("px", ""));

  return youtubeWrapperWidth;
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatedHeight: 1
    };

    this.setYoutubePlayerHeight = this.setYoutubePlayerHeight.bind(this);
  }

  componentDidMount() {
    this.setYoutubePlayerHeight();
    window.addEventListener("resize", this.setYoutubePlayerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setYoutubePlayerHeight);
  }

  setYoutubePlayerHeight() {
    const youtubePlayerWrapperWidth = getElementWidth(
      this.youtubePlayerWrapper
    );

    this.setState({ calculatedHeight: youtubePlayerWrapperWidth * 0.609375 });
  }

  render() {
    return (
      <HomepageLayout id="homepage">
        <div className="container py-5">
          <div className="row">
            <main
              className="col-12 col-md-9"
              ref={youtubeWrapperDiv => {
                this.youtubePlayerWrapper = youtubeWrapperDiv;
              }}
            >
              <YouTube
                videoId="bJiXtyad_xg"
                opts={{
                  width: "100%",
                  height: this.state.calculatedHeight,
                  modestbranding: "true"
                  // playerVars: { // https://developers.google.com/youtube/player_parameters
                  //   autoplay: 1
                  // } TODO: turn this back on after youre done developing
                }}
              />
            </main>
            <aside className="col-12 col-md-3">
              <div className="tweets-wrapper">
                <TwitterTimelineEmbed
                  noFooter
                  sourceType="profile"
                  screenName="siveriostunts"
                  options={{
                    height: this.state.calculatedHeight
                  }}
                />
              </div>
            </aside>
          </div>
        </div>
      </HomepageLayout>
    );
  }
}
