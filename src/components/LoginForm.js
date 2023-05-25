import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    setIsLoggedIn(true);
    toast.success("Logged In Successfully");
    navigate("/dashboard");
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="font-medium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label>
            <p className="p-4">
              Email Address <sup>*</sup>
            </p>

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email address"
              onChange={changeHandler}
              className="rounded-full p-4 bg-gray-600 w-full"
            />
          </label>
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
        </div>
        <div>
          <Link to="#">
            <p className="p-2 text-blue-500">Forgot Password</p>
          </Link>{" "}
        </div>
        <button className="bg-blue-500 rounded-full py-4 my-5 w-full hover:bg-blue-600">
          Sign In{" "}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
