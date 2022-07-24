import React, { useState } from "react";
import Card from "../../UI/Modal/Card/Card";
import classes from "./Body.module.css";
import UA from "../../../assets/UA.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Body = () => {
  return (
    <div className={classes.container}>
      <overlay className={classes.overlay}>
        <section className={classes.image} />
        <arrow className={classes.arrowL} style={{ 
          left: `${(props) => props.direction === "left" && "10px"}`
        }}>
          <ChevronLeftIcon />
        </arrow>
        <div className={classes.content}>
          <div className={classes.leftCard}>
            <h1 className={classes.leftMainText}>
              Save Money, <br />
              Earn Crypto, <br /> All While Shopping
            </h1>
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
      <arrow className={classes.arrowR}>
          <ChevronRightIcon />
        </arrow>
    </div>
  );
};

export default Body;
