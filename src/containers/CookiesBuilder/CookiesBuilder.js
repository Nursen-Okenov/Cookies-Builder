import React, { useState } from "react";
import CookiesKit from "../../components/CookiesBuilder/CookiesKit/CookiesKit";
import classes from "./CookiesBuilder.module.css";

export default () => {
    const [ingredients, setIngredients] = useState({
        squareCookie: 1,
        roundDarkCookie: 2,
        roundCookie: 3,
    });

    return (<div className={classes.CookiesBuilder}>
        <CookiesKit ingredients={ingredients} />
        CookiesControls
    </div>)
};


