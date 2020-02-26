import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { HashRouter, Switch } from "react-router-dom";
import LoginPage from "./containers/LoginPage";

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={SignUpPage} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;
