import React from "react";
import classes from "./CheckoutSummary.module.css";
import CookiesKit from "../../CookiesBuilder/CookiesKit/CookiesKit";
import Button from "../../UI/Button/Button";
import { Route } from "react-router-dom";

export default ({ ingredients, price, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <CookiesKit ingredients={ingredients} price={price} />

      <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
        <Button click={checkoutContinue} green>
          {" "}
          Continue
        </Button>
      </Route>
    </div>
  );
};
