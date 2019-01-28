import React from "react";
import filmsData from "../../data/films.json";
import InteriorLayout from "../../layouts/InteriorLayout";

export default props => {
  const years = {};

  // Create an array for each year found in the data
  filmsData.forEach(film => {
    if (!years[film.year]) {
      years[film.year] = []; // create year bucket
    }
  });

  // Sort movies by year
  filmsData.forEach(film => {
    years[film.year].push(film); // add film to year bucket
  });

  const handleSelectOnChange = event => {
    document.location.href = `#year-${event.target.value}`;
  };

  return (
    <InteriorLayout
      id="portfolio"
      title="Portfolio"
      description="View Manny Siverio's stunt work portfolio."
      shouldListenToScroll={true}
      {...props}
    >
      <div className="row">
        <div className="col-12">
          <span>Jump to:&nbsp;</span>
          <select onChange={handleSelectOnChange}>
            {Object.keys(years)
              .sort((a, b) => b - a)
              .map((year, index) => {
                return <option key={index}>{year}</option>;
              })}
          </select>
        </div>
      </div>
      <div className="lists-wrapper">
        {Object.keys(years)
          .sort((a, b) => b - a)
          .map((year, index) => {
            return (
              <div key={index}>
                <h5 id={`year-${year}`}>{year}</h5>
                <ul>
                  {years[year].map((film, index) => {
                    return (
                      <li key={index}>
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
