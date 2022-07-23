import React from "react";
import classes from "./CategoriesButton.module.css";

const HeaderCartButton = (props) => {
  const handleClick = {
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>Categories</span>
    </button>
  );
};

export default HeaderCartButton;
