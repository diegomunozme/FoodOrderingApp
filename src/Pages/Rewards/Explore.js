import React from "react";
import classes from "./Explore.module.css";
import { products } from "../../assets/data";

const Explore = () => {
  return (
    <div>
      <div className={classes.exploreMainContent}>
        <div>
          <div className={classes.exploreTitle}>Hottest Deals</div>
          <div className={classes.productsBox}>
            <div className={classes.productsContainer}>
              {products.map((item) => (
                <div className={classes.Container}>
                  <div className={classes.Circle} />
                  <img src={item.img} key={item.id} className={classes.Image} />
                  <div className={classes.productText}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
