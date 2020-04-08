import React from "react";
import CookiesKit from "../../components/CookiesBuilder/CookiesKit/CookiesKit";
import classes from "./CookiesBuilder.module.css";

export default () => (
    <div className={classes.CookiesBuilder}>
        <CookiesKit />
        CookiesControls
    </div>
);