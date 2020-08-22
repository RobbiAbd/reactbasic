import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterPage from "./components/Footer";

import { Layout } from "antd";
import { pageRoutes } from "./config/router";

const App = () => (
  <div className="App">
    <Layout className="layout">
      <Layout>
        <Navbar />
        <Switch>
          {pageRoutes.map((data, i) => {
            return (
              <Route
                exact
                key={i}
                path={data.path}
                component={data.component}
              />
            );
          })}
        </Switch>
        <FooterPage />
      </Layout>
    </Layout>
  </div>
);

export default App;
