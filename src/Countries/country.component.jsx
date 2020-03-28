import React from "react";
import "./country.styles.css";

const Country = ({
  country,
  cases,
  todayCases,
  deaths,
  todayDeaths,
  recovered,
  active,
  firstCase,
}) => (
  <div className="country" id={country}>
    <h1>{country}</h1>
    <div className="country-box">
      <div className="content">
        <p className="text">Total Deaths: </p>
        <p className="data">{deaths}</p>
      </div>
      <div className="content">
        <p className="text">Today Deaths: </p>
        <p className="data">{todayDeaths}</p>
      </div>
      <div className="content">
        <p className="text">Total Cases: </p>
        <p className="data">{cases}</p>
      </div>
      <div className="content">
        <p className="text">Today Cases: </p>
        <p className="data">{todayCases}</p>
      </div>
      <div className="content">
        <p className="text">Recovered Cases: </p>
        <p className="data">{recovered}</p>
      </div>
      <div className="content">
        <p className="text">Active Cases: </p>
        <p className="data">{active}</p>
      </div>
      <div className="content">
        <p className="text">First Case Report: </p>
        <p className="data">{firstCase}</p>
      </div>
    </div>
  </div>
);

export default Country;
