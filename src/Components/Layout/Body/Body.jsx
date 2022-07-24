import React from "react";
import classes from "./Body.module.css";
import Slider from "./Slider/Slider";

const Body = () => {
  return (
    <div className={classes.container}>
      <overlay className={classes.overlay}>
        <Slider/>
      </overlay>
    </div>
  );
};

export default Body;
