import React from "react";
import filmsData from "../../data/films.json";
import InteriorLayout from "../../layouts/InteriorLayout";

export default () => {
  const years = {};

  filmsData.forEach(film => {
    if (!years[film.year]) {
      years[film.year] = [];
    }
  });

  filmsData.forEach(film => {
    years[film.year].push(film);
  });

  console.log(Object.keys(years));

  return (
    <InteriorLayout
      id="portfolio"
      title="Portfolio"
      description="View Manny Siverio's stunt work portfolio."
    >
      <div className="lists-wrapper">
        {Object.keys(years)
          .sort((a, b) => b - a)
          .map(year => {
            return (
              <div>
                <h5>{year}</h5>
                <ul>
                  {years[year].map(film => {
                    return (
                      <li>
                        <p>
                          {film.name} -&nbsp;
                          <span>{film.captions.join(", ")}</span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </InteriorLayout>
  );
};
