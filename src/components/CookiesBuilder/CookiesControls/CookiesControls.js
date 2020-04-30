import React from "react";
import classes from "./CookiesControls.module.css";
import CookiesControl from "./CookiesControl/CookiesControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "French Cookies", type: "FrenchCookies" },
  { label: "Mexican Cookie", type: "MexicanCookie" },
  { label: "Rainbow Cookie", type: "RainbowCookie" },
  { label: "Serinakaker Cookie", type: "SerinakakerCookie" },
  { label: "Spanish Cookie", type: "SpanishСookie" },
  { label: "Tahini Cookie", type: "TahiniСookie" },
];

export default ({
  canOrder,
  ingredients,
  addIngredient,
  removeIngredient,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <CookiesControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
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
