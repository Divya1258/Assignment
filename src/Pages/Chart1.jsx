// // import LineChart from "../Components/LineChart";
// // import BarChart from "../Components/BarChart";
// // import PieChart from "../Components/PieChart";
// // import Other from "../Components/Other";
// import BarChart from "../Components/BarChart";

// const HomePage = () => {
//   return (
//     <div>
//       <h1>React D3 Charts</h1>
//       <div xl={{ paddingLeft: 10 }}>
//         <BarChart />
//       </div>
//       {/* <div>
//         <LineChart />
//       </div>
//       <div>
//         <PieChart />
//       </div>
//       <div>
//         <Other />
//       </div> */}
//     </div>
//   );
// };

// export default HomePage;

// HomePage.js
import React, { useState } from "react";
import BarChart from "../Components/BarChart";
import LineChart from "../Components/LineChart";
import Other from "../Components/Other";
import PieChart from "../Components/PieChart";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "./Chart.css";

const Chart1 = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = e => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // Perform your upload logic with the selectedFile
    }
    setOpen(false); // Close the dialog after handling the file upload
  };

  //   const data1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"];

  const data2 = [5, 18, 12, 28, 22];
  const data1 = [5, 18, 12, 28, 22];

  const data = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 30 },
    { month: "Mar", value: 25 },
    { month: "Apr", value: 35 },
    { month: "May", value: 40 },
  ];

  return (
    <div class="charts-container">
      <div class="top-charts">
        <div class="chart">
          <LineChart data={data2} />
        </div>
        <div class="chart">
          <span
            style={{
              display: "flex",
              borderBottom: "1px solid gray",
              marginTop: 0,
              // boxShadow: "1px 2px 2px black",
              width: "100%",
            }}
          >
            <h4>Invoice Owed to you </h4>
            <span>
              <Button
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                variant="contained"
                disableElevation
                onClick={handleClickOpen}
                style={{
                  width: "180px",
                  height: "30px",
                  paddingRight: "2px",
                  marginLeft: "160px",
                  color: "purple",
                  backgroundColor: "#eee",
                  display: "flex",
                  border: "1px solid green",
                  justifyContent: "end",
                }}
              >
                New Sales Invoice
              </Button>
            </span>
          </span>
          <span style={{ marginTop: "10px" }}>
            <PieChart data={data} />
          </span>
        </div>
      </div>
      <div class="bottom-charts">
        <div class="chart">
          <span style={{ marginTop: "10px" }}>
            <BarChart />
            {/* <PieChart data={data} /> */}
          </span>
        </div>
        <div class="chart">
          <Other data={data1} chartTitle="Bar Chart 1" />
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload a File</DialogTitle>
        <DialogContent>
          <input type="file" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFileUpload} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Chart1;
