// BarChart.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const chartRef = useRef();

  const drawChart = React.useCallback(() => {
    const svg = d3.select(chartRef.current);

    // Example: Render a bar chart with month names on the x-axis and a corresponding date range
    const barWidth = 20;
    const barHeightScale = 5;

    svg.selectAll("*").remove(); // Clear previous elements

    // X-axis scale for month names
    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.month))
      .range([0, data.length * (barWidth + 65)]);

    // Y-axis scale for the bar heights
    // const yScale = d3
    //   .scaleLinear()
    //   .domain([0, d3.max(data, d => d.value)])
    //   .range([150, 0]);

    // Render bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.month))
      .attr("y", d => 150 - d.value * barHeightScale)
      .attr("width", barWidth)
      .attr("height", d => d.value * barHeightScale)
      .attr("fill", "#00cc66")
      .attr("rx", 10) // Set border radius for rounded corners
      .attr("ry", 10);

    // Render x-axis

    const xAxis = d3.axisBottom(xScale);
    const gX = svg
      .append("g")
      .attr("transform", "translate(0,200)")
      .call(xAxis);
    gX.select(".domain").remove();
    svg
      .append("g")
      .attr("transform", `translate(0, 150)`)
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");
  }, [data]);
  useEffect(() => {
    drawChart();
  }, [drawChart]);
  return (
    <svg
      ref={chartRef}
      width={500}
      height={200}
      style={{ marginTop: "30px", paddingLeft: "40px" }}
    ></svg>
  );
};

export default BarChart;
