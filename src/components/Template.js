import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="justify-center items-center grid grid-cols-1 lg:grid-cols-2 p-2 sm:p-10 lg:px-24 sm:gap-20">
      <div className="grid items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-lg py-4">
            <span>{desc1}</span>
            <span className="text-blue-500">{desc2}</span>
          </p>

          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div class="flex items-center justify-center">
            <hr class="w-1/2" />
            <span class="mx-4">OR</span>
            <hr class="w-1/2" />
          </div>
          <div className="flex justify-center sm:p-4">
            <button className="border border-gray-600 rounded-full w-full p-4 font-medium hover:bg-gray-600">
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end lg:flex hidden bg-gray-600 rounded-full">
        <img
          src={image}
          alt="notion_img"
          rel="noreferrer"
          loading="lazy"
          className=""
        />
      </div>
    </div>
  );
}

export default Template;
