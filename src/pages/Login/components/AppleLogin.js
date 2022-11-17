import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppleLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  // fetch url 수정 필요
  const getToken = () => {
    fetch(`https://localhost:3000?code=${code}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert("로그인에 성공했습니다.");
          return res.json();
        } else {
          alert("로그인에 실패했습니다.");
          navigate("/");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      });
  };

  useEffect(() => {
    getToken();
  }, []);
  return <div>AppleLogin</div>;
};

export default AppleLogin;
