import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import PostsPage from "./containers/PostsPage";
import CreatePostPage from "./containers/CreatePostPage";

const BitBook = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={SignUpPage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/new" component={CreatePostPage} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default BitBook;
