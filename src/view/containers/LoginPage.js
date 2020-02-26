import React, { Component } from "react";
import loginDispatcher from "../../features/login/dispatcher";
import LoginForm from "../components/LoginForm/LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  onLoginClick() {
    const { email, password } = this.state;

    const loginData = {
      email,
      password
    };

    this.props.login(loginData);

    this.setState({
      email: "",
      password: ""
    });
  }
  render() {
    const { email, password } = this.state;
    const { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <React.Fragment>
        {isLoginSuccess && <Redirect to="/posts" />}
        <LoginForm
          onLoginClick={() => this.onLoginClick()}
          onInputChange={e => this.onInputChange(e)}
          isLoginPending={isLoginPending}
          loginError={loginError}
          email={email}
          password={password}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoginPending: state.login.isLoginPending,
  isLoginSuccess: state.login.isLoginSuccess,
  loginError: state.login.loginError
});

const mapDispatchToProps = dispatch => ({
  login: loginData => dispatch(loginDispatcher(loginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
