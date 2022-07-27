import React from "react";
import classes from "./RewardsButton.module.css";

const RewardsButton = (props) => {
  const handleClick = ()=> {
    console.log('trial');
   };

  return (
    <button className={classes.button} onClick={handleClick}>
    <span>Rewards</span>
    </button>
  );
};

export default RewardsButton;
