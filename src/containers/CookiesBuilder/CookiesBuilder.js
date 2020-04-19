import React, { useState } from "react";
import CookiesKit from "../../components/CookiesBuilder/CookiesKit/CookiesKit";
import classes from "./CookiesBuilder.module.css";
import CookiesControls from "../../components/CookiesBuilder/CookiesControls/CookiesControls";

const PRICES = {
  FrenchCookies: 10,
  MexicanCookie: 10,
  RainbowCookie: 15,
  SerinakakerCookie: 15,
  SpanishСookie: 15,
  TahiniСookie: 15,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    FrenchCookies: 0,
    MexicanCookie: 0,
    RainbowCookie: 0,
    SerinakakerCookie: 0,
    SpanishСookie: 0,
    TahiniСookie: 0,
  });
  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) =>{
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }
  
  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);
    
    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.CookiesBuilder}>
      <CookiesKit price={price} ingredients={ingredients} />
      <CookiesControls
        canOrder={canOrder}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};
