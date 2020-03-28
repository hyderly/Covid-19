import React, { Component } from "react";

import "../../src/styles.css";

class Pakistan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deaths: "--",
      recovered: "--",
      cases: "--",
    };
  }

  //   componentDidMount() {
  //     fetch("https://coronavirus-19-api.herokuapp.com/all")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({ deaths: data.deaths });
  //         this.setState({ recovered: data.recovered });
  //         this.setState({ cases: data.cases });
  //       });
  //   }

  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries/{Pakistan}")
      .then((response) => response)
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    const { deaths, recovered, cases } = this.state;
    return (
      <div className="world">
        <h1 className="title">Pakistan Data</h1>
        <div className="data">
          <div className="Deaths box">
            <div className="content">
              <p className="content-txt">Deaths: </p>
              <p className="content-txt">{deaths}</p>
            </div>
          </div>
          <div className="Cases box">
            <div className="content">
              <p className="content-txt">Cases: </p>
              <p className="content-txt">{cases}</p>
            </div>
          </div>
          <div className="Recoverd box">
            <div className="content">
              <p className="content-txt">Recoverd: </p>
              <p className="content-txt">{recovered}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pakistan;
