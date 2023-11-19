import React, { useState } from "react";
// import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import "./Nav.css";

const Navbar = () => {
  let [state, setstate] = useState(false);

  let handleClick = () => {
    setstate(!state);
  };
  return (
    <>
      <section className="NavSection">
        <article>
          <div className="leftBlock">
            <img src="https://www.finsmes.com/wp-content/uploads/2022/10/Assiduus_Global_Logo.jpeg" />
            {/* <h1>Doctor Care</h1> */}
          </div>

          <div className="middleBlock">
            {/* <input type="search" placeholder="SEARCH Hospitals,Doctors......" /> */}
          </div>

          <div className="rightBlock">
            {/* <div>
              <a href="">Home</a>
            </div>
            <div>
              <a href="">Service</a>
            </div>
            <div>
              <a href="">Appointment</a>
            </div> */}
            <div id="search">
              <SearchIcon />
            </div>

            <div className="notify">
              <NotificationsIcon />
            </div>

            <div onClick={handleClick} className="img">
              {/* <Link to=""> */}
              <img src="https://tse1.explicit.bing.net/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&pid=Api&P=0&h=180" />
              {/* </Link> */}
            </div>
          </div>

          <div
            className="DropDown"
            style={state === true ? { display: "block" } : { display: "none" }}
          >
            <ul>
              <li>
                <a href="/signin">Sign In</a>
              </li>
              <li>
                <a href="">Sign Up</a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default Navbar;
