import React from "react";
import classes from "./CookiesControl.module.css";

export default ({ control, removeIngredient, addIngredient, disabled }) => (
  <div className={classes.CookiesControl}>
    <span className={classes.label}>{control.label}</span>
    <button
      className={classes.less}
      onClick={() => removeIngredient(control.type)}
      disabled={disabled}
    >
      Less
    </button>
    <button
      className={classes.more}
      onClick={() => addIngredient(control.type)}
    >
      More
    </button>
  </div>
);
