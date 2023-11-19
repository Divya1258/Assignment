import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { select, scaleLinear, scaleBand, axisBottom, axisLeft, line } from "d3";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
        {/* <div sx={{ paddingLeft: 10 }}>
          <Chart1 /> */}
        {/* <Chart2 /> */}
        {/* </div> */}
        {/* <div>
          <svg id="bar-chart" width="400" height="200"></svg>
          <svg id="line-chart" width="400" height="200"></svg>
        </div> */}
      </div>
    </div>
  );
};

export default App;
