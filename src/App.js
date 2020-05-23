import React from "react";
import Layout from "./containers/Layout/Layout";
import CookiesBuilder from "./containers/CookiesBuilder/CookiesBuilder";
import "./App.css";
import Checkout from "./containers/Checkout/Checkout";

export default () => {
  return (
    <div className="App">
      <Layout>
        <CookiesBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};
