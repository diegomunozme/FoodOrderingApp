import React from "react";
import Card from "../../Components/UI/Modal/Card/Card";
import classes from "./Explore.module.css";
import UA from "../../assets/images/hbLogo.jpg";
import { products } from "../../assets/data";

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
          {/* LEts Try to import the new style */}
          <div>
            <div className={classes.productsContainer}>
              {products.map((item) => (
                <div className={classes.Container}>
                  <div className={classes.Circle} />{" "}
                  <img src={item.img} key={item.id} className={classes.Image} />
                </div>
              ))}
            </div>

            {/* {products.map((item) => (
              <Card className={classes.allCompaniesImages}>
                {" "}
                <img src={item.img} key={item.id} />
              </Card>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
