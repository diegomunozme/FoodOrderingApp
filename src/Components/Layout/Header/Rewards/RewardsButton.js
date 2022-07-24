import React from "react";
import classes from "./RewardsButton.module.css";

const RButton = (props) => {
  const handleClick = {
  };
  return (
    <button className={classes.button} onClick={handleClick}>
    <span>Rewards</span>
    </button>
  );
};

export default RButton;
