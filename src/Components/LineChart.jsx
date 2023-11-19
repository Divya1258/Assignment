// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const LineChart = ({ data }) => {
//   const chartRef = useRef();
//   const handleMonthChange = () => {
//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     const randomData = months.map(() => Math.random() * 50);
//     setChartData(randomData);
//   };

//   const [chartData, setChartData] = React.useState(
//     Array.from({ length: 12 }, () => Math.random() * 50)
//   );

//   useEffect(() => {
//     drawChart();
//   }, [data]);

//   const drawChart = () => {
//     const svg = d3.select(chartRef.current);

//     const width = 400;
//     const height = 200;

//     const xAxisValues = Array.from({ length: 10 }, (_, i) => i + 9); // Generate an array from 9 to 18

//     const line = d3
//       .line()
//       .x((d, i) => (i * width) / (data.length - 1))
//       .y(d => height - d * (height / 100))
//       .curve(d3.curveBasis)
//       .defined(d => d !== null);

//     svg.selectAll("*").remove();

//     svg
//       .append("path")
//       .datum(data)
//       .attr("d", line)
//       .attr("fill", "none")
//       .attr("stroke", "#00cc66");

//     const xScale = d3
//       .scaleLinear()
//       .domain([9, 18]) // Set the domain from 9 to 18
//       .range([0, width]);
//     const xAxis = d3.axisBottom(xScale).tickValues(xAxisValues); // Set custom tick values

//     svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

//     const header = svg.append("g").attr("class", "chart-header");

//     header
//       .append("line")
//       .attr("x1", 0)
//       .attr("y1", 25)
//       .attr("x2", width)
//       .attr("y2", 25)
//       .attr("stroke", "black");

//     header
//       .append("text")
//       .attr("x", 10)
//       .attr("y", 20)
//       .text("Left Side Name")
//       .attr("font-weight", "bold");

//     const buttonGroup = header
//       .append("g")
//       .attr("transform", `translate(${width - 160}, 5)`)
//       .on("click", handleMonthChange);

//     buttonGroup
//       .append("rect")
//       .attr("x", 0)
//       .attr("y", 0)
//       .attr("width", 60)
//       .attr("height", 20)
//       .attr("fill", "lightgray")
//       .on("click", handleMonthChange);

//     buttonGroup
//       .append("text")
//       .attr("x", 5)
//       .attr("y", 15)
//       .text("Manage")
//       .attr("fill", "black")
//       .on("click", handleMonthChange);

//     const dropdownIcon = "M5 8l4 4 4-4";
//     buttonGroup
//       .append("path")
//       .attr("d", dropdownIcon)
//       .attr("transform", `translate(65, 0)`)
//       .attr("fill", "none")
//       .attr("stroke", "black")
//       .on("click", handleMonthChange);

//     buttonGroup
//       .append("rect")
//       .attr("x", 80)
//       .attr("y", 0)
//       .attr("width", 60)
//       .attr("height", 20)
//       .attr("fill", "lightgray")
//       .on("click", handleMonthChange);

//     buttonGroup
//       .append("text")
//       .attr("x", 85)
//       .attr("y", 15)
//       .text("January")
//       .attr("fill", "black")
//       .on("click", handleMonthChange);
//   };

//   return (
//     <div style={{ width: "100%", textAlign: "center" }}>
//       <svg ref={chartRef} width={400} height={200}></svg>
//     </div>
//   );
// };

// export default LineChart;
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const chartRef = useRef();

  const handleMonthChange = () => {
    const randomData = Array.from({ length: 12 }, () => Math.random() * 50);
    drawChart(randomData);
  };

  useEffect(() => {
    drawChart(data);
  }, [data]);

  const drawChart = data => {
    const svg = d3.select(chartRef.current);

    const width = 400;
    const height = 200;

    const xAxisValues = Array.from({ length: 10 }, (_, i) => i + 9);

    const line = d3
      .line()
      .x((d, i) => (i * width) / (data.length - 1))
      .y(d => height - d * (height / 100))
      .curve(d3.curveBasis)
      .defined(d => d !== null);

    svg.selectAll("*").remove();

    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "#00cc66");

    const xScale = d3.scaleLinear().domain([9, 18]).range([0, width]);
    const xAxis = d3.axisBottom(xScale).tickValues(xAxisValues);

    svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

    // Rest of your header and button drawing code...
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div
        style={{
          borderBottom: "1px solid black",
          paddingBottom: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Checking Account</h4>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
              padding: "5px 10px",
              position: "relative",
            }}
            onClick={handleMonthChange}
          >
            Manage
            <svg
              width="16"
              height="16"
              padding="4"
              viewBox="0 0 16 16"
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "5px",
                position: "absolute",
                right: "-2px",
              }}
            >
              <path fill="#000000" d="M4 5l4 4 4-4z" />
            </svg>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
              padding: "5px 10px",
              position: "relative",
            }}
            onClick={handleMonthChange}
          >
            January
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "5px",
                position: "absolute",
                right: "-3px",
              }}
            >
              <path fill="#000000" d="M4 5l4 4 4-4z" />
            </svg>
          </button>
        </div>
      </div>
      <svg ref={chartRef} width={400} height={200}></svg>
    </div>
  );
};

export default LineChart;
