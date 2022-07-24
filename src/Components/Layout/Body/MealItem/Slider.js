import React from "react";
import classes from "./Slider.module.css";
import Card from "../../../UI/Modal/Card/Card"
import UA from "../../../../assets/UA.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


const Slider = (props) => {
  return (
    <slider>
      <section className={classes.image} />
      <arrow
        className={classes.arrowL}
        style={{
          left: `${(props) => props.direction === "left" && "10px"}`,
        }}
      >
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
      <arrow className={classes.arrowR}>
        <ChevronRightIcon />
      </arrow>
    </slider>
  );
};

export default Slider;
