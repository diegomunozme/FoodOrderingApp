import React from "react";
import Card from "../../UI/Modal/Card/Card";
import classes from "./LoginPopUp.module.css"

const LoginPopUp = () => {
  return (
    <div>
      <div className={classes.backdrop}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>title</h2>
        </header>
        <div className={classes.content}>
          <p>Login info here</p>
        </div>
        <footer className={classes.actions}>
        </footer>
      </Card>
    </div>
  );
};

export default LoginPopUp;