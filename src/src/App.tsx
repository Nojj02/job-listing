import React from "react";
import JobListing from "./JobListing/component";
import "./App.css";
import "./fonts.css";

const App = () => {
  return (
    <div className="App">
      <div className="header"></div>
      <div className="content">
        <JobListing />
      </div>
    </div>
  );
}

export default App;
