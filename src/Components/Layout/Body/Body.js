import React from "react";
import classes from "./Body.module.css";
import Slider from "./Slider/Slider";

const Body = () => {
  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <Slider/>
      </div>
    </div>
  );
};

export default Body;
