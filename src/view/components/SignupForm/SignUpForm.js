import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const SignUpForm = ({
  isEmailValid,
  isPasswordValid,
  firstName,
  lastName,
  email,
  password,
  onInputChange,
  onSignUpClick
}) => (
  <React.Fragment>
    <Header />
    <div className="login_form">
      <input
        onChange={e => onInputChange(e)}
        type="text"
        name="firstName"
        placeholder="First name"
        value={firstName}
      />
      <input
        onChange={e => onInputChange(e)}
        type="text"
        name="lastName"
        placeholder="Last name"
        value={lastName}
      />
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
        {!isPasswordValid && (
          <div>
            Password must be at least 3 characters long, and contain only
            letters and digits!
          </div>
        )}
        {!isEmailValid && <div>Please enter a valid email address!</div>}
      </div>
      <Link to="/login">Already have an account? Log In now.</Link>
      <button onClick={() => onSignUpClick()}>Sign up</button>
    </div>
  </React.Fragment>
);

export default SignUpForm;
