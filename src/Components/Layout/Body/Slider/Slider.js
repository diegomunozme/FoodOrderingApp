import React from "react";
import classes from "./Slider.module.css";
import Card from "../../../UI/Modal/Card/Card";
import HB from "../../../../assets/images/hbLogo.jpg";
import tron from "../../../../assets/images/synthwaveArt.jpg";
import { products } from "../../../../assets/data";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const Slider = () => {
  return (
    <div>
      <div className={classes.topPortion}>
        <div className={classes.Card}>
          <Card>
            <img src={HB} alt="sometext" className={classes.hBLogo} />
          </Card>
        </div>
      </div>

      <div className={classes.initialStores}>
        <div className={classes.productsBox}>
          <div className={classes.productsContainer}>
            {products.map((item) => (
              <div
                onClick={() => openInNewTab("https://google.com")}
                className={classes.Container}
              >
                <div className={classes.Circle}>
                  <img
                    src={item.img}
                    key={item.id}
                    className={classes.Image}
                    alt="none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
