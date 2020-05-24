import React from "react";
import classes from "./CheckoutSummary.module.css";
import CookiesKit from "../../CookiesBuilder/CookiesKit/CookiesKit";
import Button from "../../UI/Button/Button";

export default ({ ingredients, price, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <CookiesKit ingredients={ingredients} price={price} />
      <Button click={checkoutCancel} red>Cancel</Button>
      <Button click={checkoutContinue} green> Continue</Button>
    </div>
  );
};
