import React from "react";
import { useNavigate } from "react-router-dom";

import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <div className="contentsContainer">
        <h1>Main Page</h1>
        <h2>Social Login Test Page</h2>
        <h3 onClick={() => navigate("/login")}>로그인하러 가기-></h3>
      </div>
    </div>
  );
};

export default Main;
