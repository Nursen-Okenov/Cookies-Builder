import React from "react";
import classes from "./Cookies.module.css";

export default ({ type }) => {
  const cookiesClasses = [classes.Cookies, classes[type]];

  return <div className={cookiesClasses.join(" ")}></div>;
};
