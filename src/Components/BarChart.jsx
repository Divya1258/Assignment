import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./Bar.css";
const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { month: "Jan", in: 20, out: 30 },
      { month: "Feb", in: 40, out: 10 },
      { month: "Mar", in: 25, out: 35 },
      { month: "Apr", in: 50, out: 15 },
      { month: "May", in: 30, out: 40 },
      { month: "Jun", in: 45, out: 25 },
      { month: "Jul", in: 15, out: 35 },
    ];

    const margin = { top: 60, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.2); // Increased padding
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    const colorScale = d3
      .scaleOrdinal()
      .domain(["in", "out"])
      .range(["green", "#00cc66"]); // Define colors for 'in' and 'out'

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);
    svg.append("g").call(yAxis);

    data.forEach(d => {
      const barWidth = x.bandwidth() / 2; // Adjusted bar width

      // 'in' section
      svg
        .append("rect")
        .attr("x", x(d.month) + barWidth / 2)
        .attr("y", y(d.in))
        .attr("width", barWidth)
        .attr("height", y(0) - y(d.in))
        .attr("fill", colorScale("in"))
        .attr("rx", 10) // Set border radius for rounded corners
        .attr("ry", 10);

      // 'out' section
      svg
        .append("rect")
        .attr("x", x(d.month) + barWidth / 2)
        .attr("y", y(d.out))
        .attr("width", barWidth)
        .attr("height", y(0) - y(d.out))
        .attr("fill", colorScale("out"))
        .attr("rx", 10) // Set border radius for rounded corners
        .attr("ry", 10);
    });

    // Heading
    // svg
    //   .append("text")
    //   .attr("x", width / 2)
    //   .attr("y", -margin.top / 2)
    //   .attr("text-anchor", "middle")
    //   .text("Total Cash Flow");

    // // Legend for 'in' and 'out'
    // const legend = svg
    //   .append("g")
    //   .attr("transform", `translate(${width - 100},10)`);

    // legend
    //   .append("rect")
    //   .attr("x", 0)
    //   .attr("y", 0)
    //   .attr("width", 20)
    //   .attr("height", 10)
    //   .attr("fill", colorScale("in"));

    // legend.append("text").attr("x", 30).attr("y", 10).text("In");

    // legend
    //   .append("rect")
    //   .attr("x", 0)
    //   .attr("y", 20)
    //   .attr("width", 20)
    //   .attr("height", 10)
    //   .attr("fill", colorScale("out"));

    // legend.append("text").attr("x", 30).attr("y", 30).text("Out");
  }, []);

  return (
    <div className="chart-container">
      {" "}
      {/* Apply CSS class */}
      <div className="chart-header">
        {" "}
        {/* Apply CSS class */}
        <h4>Total Cash Flow</h4>
        <div className="legend-container">
          {" "}
          {/* Apply CSS class */}
          <div className="legend-item">
            <div className="legend-color" style={{ background: "green" }} />
            <p>In</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: "#00cc66" }} />
            <p>Out</p>
          </div>
        </div>
      </div>
      <div
        ref={chartRef}
        className="chart-content"
        style={{ paddingLeft: "10px" }}
      />{" "}
      {/* Apply CSS class */}
    </div>
  );
  // <div ref={chartRef} />)
};

export default BarChart;
