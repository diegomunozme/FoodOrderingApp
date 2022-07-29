import React from "react";

import classes from "./ConnectToBChain.module.css";

const ConnectToBChain = (props) => {
  return (
      <button className={classes.button} onClick={props.onClick}>
        <span>Connect</span>
      </button>
    
  );
};

export { ConnectToBChain };
