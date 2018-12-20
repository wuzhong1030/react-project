import React, { Component } from "react";
import { LoginWrapper, LoginForm, Input } from "./styled";

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginForm>
          <Input />
        </LoginForm>
      </LoginWrapper>
    );
  }
}

export default Login;
