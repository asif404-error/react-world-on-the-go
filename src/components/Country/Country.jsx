import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(country.continents.continents);
  //   console.log(handleVisitedCountries);
  const handleVisited = () => {
    // console.log("Button clicked!");
    // setVisited(true);(toggle step-01)

    //Using if else conditional rendering (toggle step-02)
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    //Using ternary conditional rendering (toggle step-03)
    // setVisited(visited ? false : true);

    //toggle step-04
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    // <div className= {`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name: {country.name.common}</h3>
      <p>Official Name: {country.name.official}</p>
      <p>
        Currencies:
        {Object.keys(country.currencies.currencies)
          .map((key) => {
            const currency = country.currencies.currencies[key];
            return `${currency.name} (${currency.symbol})`;
          })
          .join(", ")}
      </p>
      <p>Capital: {country.capital.capital}</p>
      <p>Region: {country.region.region}</p>
      <p>
        Languages:
        {Object.values(country.languages.languages).join(", ")}
      </p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <p>
        Popultaion: {country.population.population}{" "}
        {country.population.population > 50000000
          ? "Large Population"
          : "Shortage of Resident"}
      </p>
      <p>Continents: {country.continents.continents}</p>
      <img src={country?.flags?.flags?.png} alt="{country.flags.flags.alt}" />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country?.flags?.flags?.png);
        }}
      >
        Add Visited Flags
      </button>
    </div>
  );
};

export default Country;

/*
1. Inline css
2. Concept: Lift up the state
*/
