import React, { useState } from "react";
import classes from "./Header.module.css";
import ConnectToBChain from "./ConnectToBChain";
import CButton from "./Explore/ExploreButton";
import RewardsButton from "./Rewards/RewardsButton";
import InputChakra from "../../UI/InputChakra/InputChakra";
import UserAuth from "../PopUp/UserAuth";

const Header = () => {
  const [login, setLogin] = useState("");

  const handleLogin = () => {
    console.log("HandleSignInPOPUP");
    setLogin({})
  };

  const loginModuleHandler = () => {
    setLogin(null);
  };

  return (
    <div>
      {login && (
        <UserAuth
          title="Welcome Users!"
          message="Login with Gmail or create username and password if needed!"
          onConfirm={loginModuleHandler}
        />
      )}
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.left}>
            <h3 className={classes.title}>Hashback LLC</h3>
            <InputChakra />
          </div>
          <div className={classes.right}>
            <CButton />
            <RewardsButton onClick={() => handleLogin} />
            <CButton />
            <ConnectToBChain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
