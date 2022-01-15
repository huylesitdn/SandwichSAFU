import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routes } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            render={(props) => {
              if(!!route.layout) {
                return (
                  <route.layout>
                    <route.component {...props} routes={route.routes} />
                  </route.layout>
                )
              }
              return <route.component {...props} routes={route.routes} />
            }}
          />
        ))}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
