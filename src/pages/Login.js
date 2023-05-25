import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/pic.png";

function Login(props) {
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
      <Template
        title="Welcome Back "
        desc1="Build skills for today, tomorrow, and beyond."
        desc2=" Education to future-proof your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Login;
