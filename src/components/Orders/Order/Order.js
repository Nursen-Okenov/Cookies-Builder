import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  FrenchCookie: "French Cookie",
  MexicanCookie: "Mexican Cookie",
  RainbowCookie: "Rainbow Cookie ",
  SerinakakerCookie: "Serinakaker Cookie",
  SpanishСookie: " Spanish Сookie",
  TahiniСookie: "Tahini Сookie",
};

export default ({ price, ingredients, details }) => {
  const ingredientsOutput = Object.keys(ingredients).map((key) => (
    <span key={key} className={classes.ingredient}>
      {CONTROLS[key]} ({ingredients[key]})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <div className={classes.details}>
        {details.name}, {details.phone}, {details.address}
      </div>
      <div className={classes.price}>{price} som</div>
      <div className={classes.ingredients}>{ingredientsOutput}</div>
    </div>
  );
};
