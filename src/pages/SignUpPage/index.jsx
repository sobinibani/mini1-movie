import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../../components/SignUp";

const SignUpPage = () => {
  return (
    <div className="SignUpWrap">
      <SignUp />
      <p className="else">
        이미 아이디가 있나요? <Link to="/login">로그인하기</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
