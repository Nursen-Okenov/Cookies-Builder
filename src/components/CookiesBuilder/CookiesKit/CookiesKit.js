import React from "react";
import Cookies from "./Cookies/Cookies";
import classes from "./CookiesKit.module.css";

export default ({ ingredients}) => {
    let ingredientsOutput = [];
    
    Object.keys(ingredients).forEach(type => {
        for (let i = 0; i < ingredients[type]; i++) {
            ingredientsOutput.push(<Cookies key={type +i} type={type} />);
        }
    });

    return (
        <div className={classes.CookiesKit}>
            {ingredientsOutput} 
        </div>
    )
};