import React from "react";
import Cookies from "./Cookies/Cookies";
import classes from "./CookiesKit.module.css";

export default ({ price, ingredients }) => {
  const ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Cookies key={ingredient + i} type={ingredient} />);
    }
  });

  return (
    <div className={classes.CookiesKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
