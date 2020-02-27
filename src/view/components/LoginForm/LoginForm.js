import React from "react";
import "./LoginForm.scss";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const LoginForm = ({
  onLoginClick,
  onInputChange,
  isLoginPending,
  loginError,
  email,
  password
}) => (
  <React.Fragment>
    <Header />
    <div className="login_form">
      <input
        onChange={e => onInputChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={e => onInputChange(e)}
        type="password"
        name="password"
        placeholder="Password"
        value={password}
      />
      <div className="message">
        {isLoginPending && <div>Please wait...</div>}
        {loginError && <div>{loginError}</div>}
      </div>
      <Link to="/register">Don't have an account? Make one now.</Link>
      <button onClick={() => onLoginClick()}>Log In</button>
    </div>
  </React.Fragment>
);

export default LoginForm;
