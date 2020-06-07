import React from "react";
import classes from "./CookiesControl.module.css";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT, ADD_INGREDIENT } from "../../../../store/actions/types";

export default ({ control, disabled }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.CookiesControl}>
      <button
        className={classes.less}
        onClick={() =>
          dispatch({ type: REMOVE_INGREDIENT, ingredient: control.type })
        }
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() =>
          dispatch({ type: ADD_INGREDIENT, ingredient: control.type })
        }
      >
        +
      </button>
    </div>
  );
};
