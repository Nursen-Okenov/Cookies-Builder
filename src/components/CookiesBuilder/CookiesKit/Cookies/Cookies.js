import React, { memo } from "react";
import classes from "./Cookies.module.css";

export default memo(({ type }) => {
  const cookiesClasses = [classes.Cookies, classes[type]];

  let stylePos = null;
  const getPosition = (ir) => {
    const pd = 360;
    const pr = pd / 2;

    const ix = Math.round(Math.random() * pd);
    const iy = Math.round(Math.random() * pd);

    const distance =
      Math.sqrt(Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)) + ir;

    return distance < pr ? { x: ix - ir, y: iy - ir } : getPosition(ir);
  };

  switch (type) {
    case "FrenchCookie":
      cookiesClasses.push(classes.FrenchCookies);
      break;
    case "MexicanCookie":
      cookiesClasses.push(classes.MexicanCookie);
      break;
    case "RainbowCookie":
      cookiesClasses.push(classes.RainbowCookie);
      break;
    case "SerinakakerCookie":
      cookiesClasses.push(classes.SerinakakerCookie);
      break;
    case "SpanishСookie":
      cookiesClasses.push(classes.SpanishСookie);
      break;
    case "TahiniСookie":
    default:
      cookiesClasses.push(classes.TahiniСookie);
      break;
  }

  const position = getPosition(50 / 2);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
    transform: "rotate(" + Math.random() * 180 + "deg" + ")",
  };

  return <div style={stylePos} className={cookiesClasses.join(" ")}></div>;
});
