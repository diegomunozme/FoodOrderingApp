import React, { useState } from "react";
import classes from "./Header.module.css";
import { ConnectToBChain } from "./ConnectToBChain";
import CButton from "./Explore/ExploreButton";
import RewardsButton from "./Rewards/RewardsButton";
import InputChakra from "../../UI/InputChakra/InputChakra";
import LoginPopUp from "../LoginPopUp/LoginPopUp";

const Header = () => {
  const [login, setLogin] = useState(true);

  const handleSetLogin = (e) => {
    e.preventDefault();
    setLogin(false);
  };

  const loginModuleHandler= ()=>{
    setLogin(true);
  }

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.left}>
            <h3 className={classes.title}>Hashback LLC</h3>
            <InputChakra />
          </div>
          <div className={classes.right}>
            {login ? <LoginPopUp/> : null}
            <CButton />
            <RewardsButton onClick={loginModuleHandler}/>
            <CButton/>
            <ConnectToBChain onClick={handleSetLogin}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
