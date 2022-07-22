import React from "react";
import classes from "./Header.module.css";
import ConnectToBChain from "./ConnectToBChain";
import RewardsButton from "./RewardsButton"
const Header = () => {
  return (
    <div>
    <container className={classes.container}>
      <navbar className={classes.header}>
        <left className={classes.left} >
        <h3 className={classes.title}>Hashback LLC</h3>
        <input className={classes.searchBar} placeholder="Search"/>
        </left>
        <right className={classes.right}>
        <RewardsButton/>
        <RewardsButton/>
        <RewardsButton/>
        <ConnectToBChain />
        </right>
      </navbar>
    </container>
    </div>
  );
};

export default Header;
