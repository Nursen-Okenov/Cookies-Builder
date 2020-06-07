import React from "react";
import Layout from "./containers/Layout/Layout";
import CookiesBuilder from "./containers/CookiesBuilder/CookiesBuilder";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";

export default () => {
  return (
    <div className="App">
      <Layout>
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
        </Switch>
      </Layout>
    </div>
  );
};
