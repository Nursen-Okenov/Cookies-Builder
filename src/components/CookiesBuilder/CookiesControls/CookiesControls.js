import React from "react";
import classes from "./CookiesControls.module.css";
import CookiesControl from "./CookiesControl/CookiesControl";

export default ({ addIngredient, removeIngredient }) => {
  const controls = [
    { label: "Square Cookie", type: "squareCookie" },
    { label: "Round Dark Cookie", type: "roundDarkCookie" },
    { label: "Round Cookie", type: "roundCookie" },
  ];

  const controlsOutput = controls.map((control) => (
    <CookiesControl
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
    />
  ));

  return <div className={classes.CookiesControls}>{controlsOutput}</div>;
};
