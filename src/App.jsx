import React from "react";

import World from "./world/world.component";
import Countries from "./Countries/Countries.component";

import "./styles.css";

const App = () => (
  <div>
    <h1 className="title">Current Corona-Data (Live Update)</h1>
    <World />
    <Countries />
  </div>
);

export default App;
