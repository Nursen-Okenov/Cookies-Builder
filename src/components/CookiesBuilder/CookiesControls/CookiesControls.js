import React from "react";
import classes from "./CookiesControls.module.css";
import CookiesControl from "./CookiesControl/CookiesControl";

const CONTROLS = [
  { label: "Square Cookie", type: "squareCookie" },
  { label: "Round Dark Cookie", type: "roundDarkCookie" },
  { label: "Round Cookie", type: "roundCookie" },
];

export default ({ addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <CookiesControl
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
    />
  ));

  return <div className={classes.CookiesControls}>{controlsOutput}</div>;
};
