import React from 'react';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

export default () => (
  <ul className={classes.Nav}>
    <NavItem url="/builder" active>Cookies Builder</NavItem>
    <NavItem url="/checkout">Checkout</NavItem>
  </ul>
);