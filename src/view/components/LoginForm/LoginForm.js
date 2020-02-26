import React from "react";
import "./LoginForm.scss";
import Header from "../Header/Header";

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
      <button onClick={() => onLoginClick()}>Log In</button>
    </div>
  </React.Fragment>
);

export default LoginForm;
