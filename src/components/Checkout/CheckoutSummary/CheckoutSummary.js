import React from "react";
import classes from "./CheckoutSummary.module.css";
import CookiesKit from "../../CookiesBuilder/CookiesKit/CookiesKit";
import Button from "../../UI/Button/Button";

export default ({ ingredients, price }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <CookiesKit ingredients={ingredients} price={price} />
      <Button red>Cancel</Button>
      <Button green> Continue</Button>
    </div>
  );
};
