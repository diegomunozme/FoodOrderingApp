import React from "react";
import appleImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <div>
    <container className={classes.container}>
      <navbar className={classes.header}>
        <left className={classes.left} >
        <h1 className={classes.title}>Hashback LLC</h1>
        <input className={classes.searchBar} placeholder="Search"/>
        </left>
        <HeaderCartButton />
      </navbar>
    </container>
    </div>
  );
};

export default Header;
