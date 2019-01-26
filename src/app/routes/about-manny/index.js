import React from "react";
import InteriorLayout from "../../layouts/InteriorLayout";
import mannyImg from "../../assets/mannypic3.jpg";

export default () => (
  <InteriorLayout
    id="about-manny"
    title="About Manny Siverio"
    description="TODO: write this"
  >
    <div>
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={mannyImg} alt="Manny Siverio, Owner of Siverio Stunts" />
        </div>
        <div className="col-12 col-md-8">
          <p>
            He is a member of SAG (Screen Actors Guild), DGA (Directors Guild of
            America), AFTRA (American Federation of Television & Radio Artists)
            & the WGAe (Writers Guild of America East). Author of numerous
            martial art articles, books & instructional video tapes, Manny has
            been involved in the martial arts since the age of ten. He has
            worked in the film industry since the early 1980's and has been the
            subject of various articles and televised interviews.
          </p>
          <p>
            In 2008 he was the winner of Taurus Stunt Award for Best Fire. His
            standing in the industry has kept him busy working in NYC and
            traveling around the nation and Puerto Rico, performing,
            coordinating and directing stunts. Among his credits are{" "}
            <strong>Did You Hear About The Morgans?</strong>,{" "}
            <strong>We Own The Night</strong>,{" "}
            <strong>Steven Soderburgh's Che'</strong>,{" "}
            <strong>Wes Craven's 25/8</strong>,{" "}
            <strong>Ugly Betty Season 3 & 4</strong>,{" "}
            <strong>Supertroopers</strong>, <strong>Girl Fight</strong>,{" "}
            <strong>Third Watch</strong>, <strong>Blade</strong>,{" "}
            <strong>Money Train</strong>, <strong>Men In Black</strong>,{" "}
            <strong>Dead Presidents</strong>,{" "}
            <strong>New York Undercover</strong>,{" "}
            <strong>Law &The First Wives Club</strong>,{" "}
            <strong>Dellaventura</strong>, <strong>Oz</strong>,{" "}
            <strong>Malcom X</strong>, <strong>The Super</strong>,{" "}
            <strong>Out for Justice</strong>,{" "}
            <strong>King of New York and CopLand</strong>.
          </p>
        </div>
      </div>
    </div>
  </InteriorLayout>
);
