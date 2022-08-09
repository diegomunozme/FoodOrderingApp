import React from "react";
import classes from "./Header.module.css";
import { ConnectToBChain } from "./ConnectToBChain";
import CButton from "./Explore/ExploreButton";
import RewardsButton from "./Rewards/RewardsButton";
import InputChakra from "../../UI/InputChakra/InputChakra";

const Header = (props) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.left}>
            <h3 className={classes.title}>Hashback</h3>
            <InputChakra />
          </div>
          {/* {login ? <LoginPopUp/> : null}; */}
          <div className={classes.right}>
            <RewardsButton />
            <CButton />
            <ConnectToBChain onClick={props.handleSetLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
