import React from "react";
import classes from "./CookiesControls.module.css";
import CookiesControl from "./CookiesControl/CookiesControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <CookiesControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.CookiesControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
