import React from "react";
import classes from "./CookiesControl.module.css";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT, ADD_INGREDIENT } from "../../../../store/actions";

export default ({ control, removeIngredient, addIngredient, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.CookiesControl}>
      <button
        className={classes.less}
        onClick={() => dispatch({ type: REMOVE_INGREDIENT })}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => dispatch({ type: ADD_INGREDIENT })}
      >
        +
      </button>
    </div>
  );
};
