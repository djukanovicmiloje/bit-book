import React from "react";
import "./LoginForm.scss";

const LoginForm = ({
  onLoginClick,
  onInputChange,
  isLoginPending,
  loginError,
  email,
  password
}) => (
  <div className="login_form">
    <input
      onChange={e => onInputChange(e)}
      type="text"
      name="email"
      placeholder="email"
      value={email}
    />
    <input
      onChange={e => onInputChange(e)}
      type="text"
      name="password"
      placeholder="password"
      value={password}
    />
    <button onClick={() => onLoginClick}>Log In</button>
    <div className="message">
      {isLoginPending && <div>Please wait...</div>}
      {loginError && <div>{loginError}</div>}
    </div>
  </div>
);

export default LoginForm;
