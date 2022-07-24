import React from "react";
import classes from "./Header.module.css";
import ConnectToBChain from "./ConnectToBChain";
import CButton from "./Explore/ExploreButton";
import RButton from "./Rewards/RewardsButton"
import InputChakra from "../../UI/InputChakra/InputChakra";

const Header = () => {
  return (
    <div>
      <container className={classes.container}>
        <navbar className={classes.header}>
          <left className={classes.left}>
            <h3 className={classes.title}>Hashback LLC</h3>
            <InputChakra/>
          </left>
          <right className={classes.right}>
            <CButton/>
            <RButton/>
            <CButton/>
            <ConnectToBChain />
          </right>
        </navbar>
      </container>
    </div>
  );
};

export default Header;
