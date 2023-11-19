import React, { useState, useEffect } from "react";
import { select, scaleLinear, scaleBand, axisBottom, axisLeft, line } from "d3";

const DualCharts = () => {
  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    drawBarChart();
    drawLineChart();
  }, [data]);

  function generateRandomData() {
    const newData = [];
    for (let i = 0; i < 10; i++) {
      newData.push({ label: `Item ${i + 1}`, value: Math.random() * 100 });
    }
    return newData;
  }

  function drawBarChart() {
    const svg = select("#bar-chart");

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.selectAll("*").remove();

    const xScale = scaleBand()
      .domain(data.map(d => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(d => d.value))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(axisLeft(yScale));

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.label))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - margin.bottom - yScale(d.value))
      .attr("fill", "steelblue");
  }

  function drawLineChart() {
    const svg = select("#line-chart");

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.selectAll("*").remove();

    const xScale = scaleBand()
      .domain(data.map(d => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(d => d.value))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const lineGenerator = line()
      .x(d => xScale(d.label) + xScale.bandwidth() / 2)
      .y(d => yScale(d.value));

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(axisLeft(yScale));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);
  }

  return (
    <div>
      {/* <svg id="bar-chart" width="400" height="200"></svg> */}
      <svg id="line-chart" width="400" height="200"></svg>
    </div>
  );
};

export default DualCharts;
