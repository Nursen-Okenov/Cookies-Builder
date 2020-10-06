import React, { memo } from "react";
import classes from "./Ingredient.module.css";

export default memo(({ type }) => {
  let stylePosition = null;
  const getPosition = (ir) => {
    const pd = 360;
    const pr = pd / 2;

    const ix = Math.round(Math.random() * pd);
    const iy = Math.round(Math.random() * pd);

    const distance =
      Math.sqrt(Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)) + ir;

    return distance < pr ? { x: ix - ir, y: iy - ir } : getPosition(ir);
  };
  const IngredientsClasses = [classes.Ingredient, classes[type]];
  switch (type) {
    case "FrenchCookie":
      IngredientsClasses.push(classes.FrenchCookies);
      break;
    case "MexicanCookie":
      IngredientsClasses.push(classes.MexicanCookie);
      break;
    case "RainbowCookie":
      IngredientsClasses.push(classes.RainbowCookie);
      break;
    case "SerinakakerCookie":
      IngredientsClasses.push(classes.SerinakakerCookie);
      break;
    case "SpanishСookie":
      IngredientsClasses.push(classes.SpanishСookie);
      break;
    case "TahiniСookie":
    default:
      IngredientsClasses.push(classes.TahiniСookie);
      break;
  }

  const position = getPosition(50 / 2);

  stylePosition = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
  };

  return (
    <div style={stylePosition} className={IngredientsClasses.join(" ")}></div>
  );
});







   


 