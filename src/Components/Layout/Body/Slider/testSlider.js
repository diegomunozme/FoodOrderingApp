import React, { useState } from "react";
import classes from "./Slider.module.css";
import Card from "../../../UI/Modal/Card/Card";
import UA from "../../../../assets/UA.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { SliderData } from "./SliderData";

const TestSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <slider>
      {SliderData.map((slide,index) => {
        return (
            <img src={slide.image}/>
        );
      })} 
      <arrow className={classes.arrowL}>
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

export default TestSlider;
