import React from "react";
import Page from "../../components/page";
import filmsData from "../../data/films.json";

export default () => (
  <Page
    id="films"
    title="Films"
    description="View Manny Siverio's stunt work portfolio."
  >
    <div className="lists-wrapper">
      {filmsData.map(film => {
        return (
          <div>
            {film.name}
            {film.captions}
          </div>
        );
      })}
    </div>
  </Page>
);
