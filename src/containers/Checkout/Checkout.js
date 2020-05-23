import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

export default () => {
  const ingredients = {
    FrenchCookies: 1,
    MexicanCookie: 1,
    RainbowCookie: 1,
    SerinakakerCookie: 1,
    SpanishСookie: 1,
    TahiniСookie: 1,
  };
  const price = 123;
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary ingredients={ingredients} price={price} />
    </div>
  );
};
