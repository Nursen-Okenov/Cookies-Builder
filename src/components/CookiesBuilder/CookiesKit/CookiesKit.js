import React from "react";
import Cookies from "./Cookies/Cookies";
import classes from "./CookiesKit.module.css";

export default () => (
    <div className={classes.CookiesKit}>
        <Cookies type="round-cookie"/>
        <Cookies type="square-cookie"/>
        <Cookies type="round-dark-cookie"/>
        
    </div>
);