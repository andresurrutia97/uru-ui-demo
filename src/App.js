import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Hoc/Layout/Layout";
import { home, components } from "./Routes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/home" />} />
        <Route path={home.path} component={home.component} />
        {components.map((rt, index) => {
          return <Route key={index} path={rt.path} component={rt.component} />;
        })}
      </Switch>
    </Layout>
  );
}

export default App;
