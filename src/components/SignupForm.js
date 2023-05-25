import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("clicked");

    if (formData.password !== formData.confirmPassword) {
      console.log("not matched");
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Sign Up Successfully");
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="bg-gray-600 p-1 rounded-full inline-block font-medium grid grid-cols-2">
        <button className="hover:bg-gray-800 p-3 rounded-full">Student</button>
        <button className="hover:bg-gray-800 p-3 rounded-full">
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="font-medium py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-5">
          <label>
            <p className="p-4">
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={changeHandler}
              value={formData.firstName}
              className="rounded-full p-4 bg-gray-600 w-full"
            />
          </label>
          <label>
            <p className="p-4"> Last Name</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              className="rounded-full p-4 bg-gray-600 w-full"
            />
          </label>
        </div>

        <label>
          <p className="p-4">
            Email <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={changeHandler}
            value={formData.email}
            className="rounded-full p-4 bg-gray-600 w-full"
          />
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label>
            <p className="p-4">
              Password <sup>*</sup>
            </p>
            <span className="flex">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter password"
                value={formData.password}
                className="rounded-l-full p-4 bg-gray-600 w-full"
              />
              <span
                className="flex items-center justify-end rounded-r-full px-4 bg-gray-600 w-full"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </span>
          </label>

          <label>
            <p className="p-4">
              Confirm Password <sup>*</sup>
            </p>
            <span className="flex">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="rounded-l-full p-4 bg-gray-600 w-full"
              />
              <span
                className="flex items-center justify-end rounded-r-full px-4 bg-gray-600 w-full"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </span>
          </label>
        </div>
        <button className="bg-blue-500 rounded-full py-4 my-5 w-full hover:bg-blue-600">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
