import React, { Component } from "react";
import isPasswordValid from "../../utils/isPasswordValid";
import isEmailValid from "../../utils/isEmailValid";
import SignUpForm from "../components/SignupForm/SignUpForm";
import singUpDispatcher from "../../features/signup/dispatcher";
import { connect } from "react-redux";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: "",
      isPasswordValid: true,
      isEmailValid: true
    };
  }
  onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  onSignUpClick() {
    const { name, lastName, email, password } = this.state;

    const signUpData = {
      name: `${name} ${lastName}`,
      email,
      password
    };

    if (isPasswordValid(password) && isEmailValid(email)) {
      this.props.signUp(signUpData);

      this.setState({
        name: "",
        lastName: "",
        email: "",
        password: ""
      });
    } else {
      this.setState({
        isEmailValid: isEmailValid(email),
        isPasswordValid: isPasswordValid(password)
      });
    }
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      isEmailValid,
      isPasswordValid
    } = this.state;

    const { isSignUpPending, isSignUpSuccess, signUpError } = this.props;

    return (
      <SignUpForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        onInputChange={e => this.onInputChange(e)}
        onSignUpClick={() => this.onSignUpClick()}
      />
    );
  }
}

const mapStateToProps = state => ({
  isSignUpPending: state.signup.isSignUpPending,
  isSignUpSuccess: state.signup.isSignUpSuccess,
  signUpError: state.signup.signUpError
});

const mapDispatchToProps = dispatch => ({
  signUp: signUpData => dispatch(singUpDispatcher(signUpData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
