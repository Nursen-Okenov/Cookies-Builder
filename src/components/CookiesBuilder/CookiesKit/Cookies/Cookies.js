import React from "react";
import classes from "./Cookies.module.css";

export default ({ type }) => {
    const cookiesClasses =[classes.Cookies];
    switch (type) {
       case "square-cookie":
           cookiesClasses.push(classes.squareCookie);
        break;

       case "round-dark-cookie":
        cookiesClasses.push(classes.roundDarkCookie);
        break;

       case "round-cookie":
        default:
            cookiesClasses.push(classes.roundCookie);
         break;
    }


   return(
   <div className={cookiesClasses.join(" ")}>
       
   </div>
    );
};