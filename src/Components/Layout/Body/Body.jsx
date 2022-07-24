import React, { useState } from "react";
import Card from "../../UI/Modal/Card/Card";
import classes from "./Body.module.css";
import UA from "../../../assets/UA.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "./MealItem/Slider";

const Body = () => {
  return (
    <div className={classes.container}>
      <overlay className={classes.overlay}>
        <Slider/>
      </overlay>
    </div>
  );
};

export default Body;
