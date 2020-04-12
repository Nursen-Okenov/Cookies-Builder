import React, { useState } from "react";
import CookiesKit from "../../components/CookiesBuilder/CookiesKit/CookiesKit";
import classes from "./CookiesBuilder.module.css";
import CookiesControls from "../../components/CookiesBuilder/CookiesControls/CookiesControls";

export default () => {
  const [ingredients, setIngredients] = useState({
    squareCookie: 1,
    roundDarkCookie: 2,
    roundCookie: 3,
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }
  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.CookiesBuilder}>
      {ingredients.squareCookie}
      <CookiesKit ingredients={ingredients} />
      <CookiesControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};
