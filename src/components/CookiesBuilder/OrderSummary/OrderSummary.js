import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const LABELS = {
  FrenchCookies: "French Cookies",
  MexicanCookie: "Mexican Cookie",
  RainbowCookie: "Rainbow Cookie",
  SerinakakerCookie: "Serinakaker Cookie",
  SpanishСookie: "Spanish Cookie",
  TahiniСookie: "Tahini Cookie",
};

export default ({ ingredients, cancelOrder, finishOrder, price }) => {
  const ingredientsOutput = Object.keys(ingredients)
    .filter((ingredient) => ingredients[ingredient] > 0)
    .map((ingredient) => (
      <li>
        {LABELS[ingredient]}: {ingredients[ingredient]}
      </li>
    ));
  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Congratulations! You've built a best cookies-kit of all times!</p>
      <ul>{ingredientsOutput}</ul>
      <p>Total price: {price.toFixed(2)} som </p>
      <p>Would you like to checkout?</p>
      <Button click={finishOrder} green>Checkout</Button>
      <Button click={cancelOrder} red>
        Cancel
      </Button>
    </div>
  );
};
