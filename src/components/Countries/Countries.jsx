import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Handle Visited Country Clicked!", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    // console.log("Flags needs to be added.", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

//Most of the cases, In React, the Data is uni-directional

/*
const numbers = [1, 5, 24, 5, 6];
const newNumbers = [numbers]; 
output: newNumbers = [Array (5)]
const newNumbers = [...numbers] //we will use spread operator to get the array of numbers
const newNumbers = [...numbers, 44]; //to add extra numbers in the array
*/
