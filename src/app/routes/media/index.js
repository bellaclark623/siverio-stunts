import React from "react";
import filmsData from "../../data/films.json";
import InteriorLayout from "../../layouts/InteriorLayout";

export default () => (
  <InteriorLayout
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
  </InteriorLayout>
);
