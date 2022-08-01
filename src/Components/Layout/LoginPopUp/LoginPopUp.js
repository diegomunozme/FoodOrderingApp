import React from "react";
import Card from "../../UI/Modal/Card/Card";
import classes from "./LoginPopUp.module.css";
import FirebaseApp from "../Header/Firebase-UI/FirebaseApp";

const LoginPopUp = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.loginModuleHandler} />
      <Card className={classes.modal}>
        <header>
          <h2>Login or Register Today!!</h2>
        </header>
        <div className={classes.content}>
          {/* Lets see what happens here */}
          <FirebaseApp/>
        </div>
      </Card>
    </div>
  );
};

export default LoginPopUp;
