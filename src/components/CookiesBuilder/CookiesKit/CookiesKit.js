import React from "react";
import Cookies from "./Cookies/Cookies";
import classes from "./CookiesKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Cookies key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.CookiesKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>Total price: {price.toFixed(2)} som</div>
    </div>
  );
};
