import React from "react";
import SidebarData from "./SidebarData";
import Chart1 from "../Pages/Chart1";
// import LeftBlock from "../Home/LeftBlock";
// import RightBlock from "../Home/RightBlock";
import "./Home.css";
const About = () => {
  return (
    // <div className="Block">
    //   <div className="About">
    //     <article>
    //       <SidebarData />
    //       <Chart1 />
    //     </article>
    //   </div>
    // </div>
    <div class="container">
      <div class="left-section">
        {/* <!-- Content for the left section --> */}
        <SidebarData />
      </div>
      <div class="right-section">
        <Chart1 />
        {/* <div class="chart">Chart 1</div>
        <div class="chart">Chart 2</div>
        <div class="chart">Chart 3</div>
        <div class="chart">Chart 4</div> */}
      </div>
    </div>
  );
};

export default About;
