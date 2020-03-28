import React, { Component } from "react";

import Country from "./country.component";
import "./Countries.styles.css";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data, search: "" });
      });
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    console.log(this.state.countries);
    const { countries, search } = this.state;
    const filterCountries = countries.filter((country) =>
      country.country.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="countries">
        <h1 className="title">
          All Countries data :{" "}
          {countries.length ? countries.length : "   ...Loading"}
        </h1>
        {countries.length ? (
          <input
            type="text"
            value={search}
            onChange={this.handleChange}
            placeholder="Search By Countries"
            className="search"
          />
        ) : (
          ""
        )}
        <div className="countries-box">
          {filterCountries.map(
            ({
              country,
              cases,
              todayCases,
              deaths,
              todayDeaths,
              recovered,
              active,
              firstCase,
            }) => (
              <Country
                key={country}
                country={country}
                cases={cases}
                todayCases={todayCases}
                deaths={deaths}
                todayDeaths={todayDeaths}
                recovered={recovered}
                active={active}
                firstCase={firstCase}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Countries;
