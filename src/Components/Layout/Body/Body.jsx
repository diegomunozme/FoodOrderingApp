import React, { useState } from "react";
import Card from "../../UI/Modal/Card/Card";
import classes from "./Body.module.css";
import UA from "../../../assets/UA.jpg";

const Body = () => {
  return (
    <div className={classes.container}>
      <overlay className={classes.overlay}>
        <section className={classes.image} />
        <div className={classes.content}>
          <div className={classes.leftCard}>
            <h1 className={classes.leftMainText} >Save Money, <br />Earn Crypto While Shopping</h1>
            <p className={classes.leftPText}>
              Buy NFTs (or sell 'em) to earn rewards. Explore the market to get
              started.
            </p>
          </div>
          <Card>
            <img src={UA} className={classes.rightCard} />
          </Card>
        </div>
      </overlay>
    </div>
  );
};

export default Body;
