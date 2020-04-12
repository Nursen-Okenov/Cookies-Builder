import React, { useState } from "react";
import CookiesKit from "../../components/CookiesBuilder/CookiesKit/CookiesKit";
import classes from "./CookiesBuilder.module.css";
import CookiesControls from "../../components/CookiesBuilder/CookiesControls/CookiesControls";

const PRICES = {
  squareCookie: 30,
  roundDarkCookie: 20,
  roundCookie: 10,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    squareCookie: 0,
    roundDarkCookie: 0,
    roundCookie: 0,
  });
  const [price, setPrice] = useState(100);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.CookiesBuilder}>
      <CookiesKit price={price} ingredients={ingredients} />
      <CookiesControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};
