import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const ingredients = {
    FrenchCookies: 1,
    MexicanCookie: 1,
    RainbowCookie: 1,
    SerinakakerCookie: 1,
    SpanishСookie: 1,
    TahiniСookie: 1,
  };
  const price = 123;

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/finish");
  }
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
