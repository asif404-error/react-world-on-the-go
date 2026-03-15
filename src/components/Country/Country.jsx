import React from "react";

const Country = ({ country }) => {
  console.log(country.continents.continents);
  return (
    <div>
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
      <p>Area: {country.area.area}</p>
      <p>Popultaion: {country.population.population}</p>
      <p>Continents: {country.continents.continents}</p>
      <img src={country.flags.flags.png} alt="{country.flags.flags.alt}" />
    </div>
  );
};

export default Country;
