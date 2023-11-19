// // BarChart.js
// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const BarChart = ({ data, chartTitle }) => {
//   const chartRef = useRef();

//   useEffect(() => {
//     drawChart();
//   }, [data, chartTitle]);

//   const drawChart = () => {
//     // D3 code to draw the bar chart
//     // Use chartRef.current to reference the chart container
//     const svg = d3.select(chartRef.current);

//     // Example: Render a simple bar chart with provided data
//     const barWidth = 30;
//     const barHeightScale = 5;

//     svg.selectAll("*").remove(); // Clear previous elements

//     svg
//       .selectAll("rect")
//       .data(data)
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * (barWidth + 25))
//       .attr("y", d => 150 - d * barHeightScale)
//       .attr("width", barWidth)
//       .attr("height", d => d * barHeightScale)
//       .attr("fill", "steelblue");

//     // Add chart title
//     svg
//       .append("text")
//       .attr("x", 100)
//       .attr("y", 180)
//       .attr("text-anchor", "middle")
//       .style("font-size", "16px")
//       .text(chartTitle);
//   };

//   return <svg ref={chartRef} width={400} height={200}></svg>;
// };

// export default BarChart;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const SimpleTable = () => {
  return (
    <TableContainer component={Paper}>
      <h4>Account Watchlist</h4>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>This Month</TableCell>
            <TableCell>YTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Sales</TableCell>
            <TableCell>1,194,58</TableCell>
            <TableCell>11,418.29</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Advertising</TableCell>
            <TableCell>6,879.02</TableCell>
            <TableCell>9,271.36</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Inventory</TableCell>
            <TableCell>4,692.26</TableCell>
            <TableCell>9,768.09</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Environment</TableCell>
            <TableCell>0.00</TableCell>
            <TableCell>0.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>4,652.10</TableCell>
            <TableCell>2,529.90</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
