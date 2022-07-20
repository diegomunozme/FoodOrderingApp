import React from "react";
import Card from "../UI/Modal/Card/Card";
import classes from "./Body.module.css";
const Body = () => {
  return (
    <div>
      <container className={classes.container}>
        <Card>
          <h1>More</h1>
        </Card>
      </container>
    </div>
  );
};

export default Body;
