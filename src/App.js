import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import CookiesBuilder from './containers/CookiesBuilder/CookiesBuilder';

 export default () => {
  return (
    <div className="App">
      <Layout>
        <CookiesBuilder />
      </Layout>
    </div>
  );
};


