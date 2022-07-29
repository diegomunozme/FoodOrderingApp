import React from "react";
import classes from "./Header.module.css";
import { ConnectToBChain } from "./ConnectToBChain";
import CButton from "./Explore/ExploreButton";
import RewardsButton from "./Rewards/RewardsButton";
import InputChakra from "../../UI/InputChakra/InputChakra";

const Header = (props) => {
  // const [login, setLogin] = useState(true);

  // const handleSetLogin = (e) => {
  //   e.preventDefault();
  //   setLogin(false);
  // };

  // const loginModuleHandler= ()=>{
  //   setLogin(true);
  // };
   

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.left}>
            <h3 className={classes.title}>Hashback LLC</h3>
            <InputChakra />
          </div>
          {/* {login ? <LoginPopUp/> : null}; */}
          <div className={classes.right}>
            <CButton />
            <RewardsButton onClick={props.loginModuleHandler}/>
            <CButton/>
            <ConnectToBChain onClick={props.handleSetLogin}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
