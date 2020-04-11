import React from "react";
import classes from "./Cookies.module.css";

export default ({ type }) => {
    const cookiesClasses =[classes.Cookies];
    switch (type) {
       case "squareCookie":
           cookiesClasses.push(classes.squareCookie);
        break;

       case "roundDarkCookie":
        cookiesClasses.push(classes.roundDarkCookie);
        break;

       case "roundCookie":
        default:
            cookiesClasses.push(classes.roundCookie);
         break;
    }


   return(
   <div className={cookiesClasses.join(" ")}>
       
   </div>
    );
};