import React from "react";
import classes from "./ExploreButton.module.css";

const HeaderCartButton = (props) => {
  const handleClick = ()=> {
   console.log('trial');
  };
  return (
    <button className={classes.button} onClick={handleClick}>
    <span>Explore</span>
    </button>
  );
};

export default HeaderCartButton;
