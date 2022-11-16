import React from "react";

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
          <button>구글 로그인</button>
          <button>애플 로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
