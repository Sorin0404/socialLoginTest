import React from "react";

import { GOOGLE_AUTH_URL } from "./components/GoogleLoginAuth";
import { APPLE_AUTH_URL } from "./components/AppleLoginAuth";

import "./Login.scss";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <h1>Login Page</h1>
        <div className="idInput">
          <div className="id">ID</div>
          <input></input>
        </div>
        <div className="pwInput">
          <div className="pw">비밀번호</div>
          <input></input>
        </div>
        <div className="loginOrSignUp">
          <a href={GOOGLE_AUTH_URL}>
            <button>구글 로그인</button>
          </a>
          <a href={APPLE_AUTH_URL}>
            <button>애플 로그인</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
