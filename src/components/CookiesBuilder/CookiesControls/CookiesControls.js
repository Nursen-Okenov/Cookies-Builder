import React from "react";
import classes from "./CookiesControls.module.css";
import CookiesControl from "./CookiesControl/CookiesControl";

export default () => {
  const controls = [
    { label: "Square Cookie", type: "squareCookie" },
    { label: "Round Dark Cookie", type: "roundDarkCookie" },
    { label: "Round Cookie", type: "roundCookie" },
  ];

  const controlsOutput = controls.map((control) => (
    <CookiesControl label={control.label} />
  ));

  return <div className={classes.CookiesControls}>{controlsOutput}</div>;
};
