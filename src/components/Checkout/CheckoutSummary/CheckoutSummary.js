import React from "react";
import classes from "./CheckoutSummary.module.css";
import CookiesKit from "../../CookiesBuilder/CookiesKit/CookiesKit";

export default ({ ingredients, price }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <CookiesKit ingredients={ingredients} price={price} />
    </div>
  );
};
