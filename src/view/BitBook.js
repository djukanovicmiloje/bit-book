import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";

const BitBook = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default BitBook;
