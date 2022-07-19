import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const handleClick = {
  
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>Connect</span>
    </button>
  );
};

export default HeaderCartButton;
