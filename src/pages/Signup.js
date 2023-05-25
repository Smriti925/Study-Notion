import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/pic.png";

function Signup(props) {
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
      <Template
        title="Join the millions learning to code us StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2=" Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup;
