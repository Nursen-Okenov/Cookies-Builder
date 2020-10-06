import React, { useEffect } from "react";
import Layout from "./containers/Layout/Layout";
import CookiesBuilder from "./containers/CookiesBuilder/CookiesBuilder";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";
import { restore } from "./store/actions/auth";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  useEffect(() => {
    restore(dispatch);
  }, [dispatch]);
  let routesOutput = (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/builder" />
      </Route>
      <Route path="/builder">
        <CookiesBuilder />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/builder" />
        </Route>
        <Route path="/builder">
          <CookiesBuilder />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    );
  }
  return (
    <div className="App">
      <Layout>{routesOutput}</Layout>
    </div>
  );
};