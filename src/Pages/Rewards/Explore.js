import React from "react";
import Card from "../../Components/UI/Modal/Card/Card";
import classes from "./Explore.module.css";
import UA from "../../assets/hbLogo.jpg";

const Explore = () => {
  return (
    <div>
      <div className={classes.exploreMainContent}>
        <div className={classes.exploreTitle}>Hottest Deals</div>
        <div className={classes.hottestDealsGrid}>
          <Card>
            <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
          </Card>
          <Card>
            <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
          </Card>
          <Card>
            <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
          </Card>
          <Card>
            <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
          </Card>
        </div>
        <div>
          <div className={classes.exploreTitle}>Hottest Deals</div>

          <div className={classes.allCompanies}>
            <Card>
              <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
            </Card>
            <Card>
              <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
            </Card>
            <Card>
              <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
            </Card>
            <Card>
              <img src={UA} alt="placeholder" className={classes.exploreCard} />{" "}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
