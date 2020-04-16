import React from "react";
import classes from "./CookiesControls.module.css";
import CookiesControl from "./CookiesControl/CookiesControl";

const CONTROLS = [
  { label: "French Cookies", type: "FrenchCookies" },
  { label: "Mexican Cookie", type: "MexicanCookie" },
  { label: "Rainbow Cookie", type: "RainbowCookie" },
  { label: "Serinakaker Cookie", type: "SerinakakerCookie" },
  { label: "Spanish Сookie", type: "SpanishСookie" },
  { label: "Tahini Сookie", type: "TahiniСookie" },
];

export default ({ ingredients, addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <CookiesControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      desabled={ingredients[control.type] === 0}
    />
  ));

  return <div className={classes.CookiesControls}>{controlsOutput}</div>;
};
