import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Hoc/Layout/Layout";
import * as routes from "./Routes";

function App() {
  let rutas = [];
  for (let i in routes) {
    rutas.push(...routes[i]);
  }

  return (
    <Layout>
      <Switch>
        {rutas.map((rt, index) => {
          return <Route key={index} path={rt.path} component={rt.component} />;
        })}
        <Route path="/" component={() => <Redirect to="/home" />} />
      </Switch>
    </Layout>
  );
}

export default App;
