import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PersonIcon from "@mui/icons-material/Person";
import ContactPageIcon from "@mui/icons-material/ContactPage";
// import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Button, Typography, Grid } from "@mui/material";

const Sidebar = () => {
  const menuItems = [
    { text: "Dasboard", path: "/", icon: <DashboardIcon /> }, // Include the icon for each item
    { text: "Accounts", path: "/", icon: <AccountBalanceWalletIcon /> },
    { text: "Payroll", path: "/", icon: <AttachMoneyIcon /> },
    { text: "Reports", path: "/", icon: <ContactPageIcon /> },
    { text: "Advisor", path: "/", icon: <PersonIcon /> },
    { text: "Contacts", path: "/", icon: <ContactPhoneIcon /> },

    // Add other menu items with respective paths and icons
  ];

  const [clickedButton, setClickedButton] = useState("");

  const handleClick = index => {
    setClickedButton(index);
  };

  const buttonStyle = index => ({
    backgroundColor: clickedButton === index ? "#00cc66" : "white",
    margin: "5px",
    padding: "10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "black",
  });
  const listStyle = {
    padding: 0, // Remove default padding
    margin: 0, // Remove default margin
    listStyleType: "none", // Remove default list styles
  };
  return (
    <div>
      <ul style={listStyle}>
        {menuItems.map((item, index) => (
          <Grid container spacing={8} key={index}>
            <Grid item xs={16}>
              <Button
                key={index}
                component={Link}
                to={item.path}
                variant="contained"
                style={buttonStyle(index)}
                onClick={() => handleClick(index)}
                startIcon={item.icon} // Include the icon using startIcon prop
              >
                <Typography variant="inherit">{item.text}</Typography>
              </Button>
            </Grid>
          </Grid>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
