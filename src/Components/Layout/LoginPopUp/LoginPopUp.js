import React from "react";
import Card from "../../UI/Modal/Card/Card";
import classes from "./LoginPopUp.module.css"

const LoginPopUp = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick = {props.loginModuleHandler}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>title</h2>
        </header>
        <div className={classes.content}>
          <p>Login info here</p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPopUp;