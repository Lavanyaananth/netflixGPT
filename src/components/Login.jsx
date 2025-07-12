import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg"
          alt="NetflixGPT"
        ></img>
      </div>
      <form className="absolute p-12 bg-black w-1/4 mx-auto my-36 left-0 right-0  text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl pb-5">
          {" "}
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-900"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-900"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-900"
        ></input>

        <button className="p-4 my-6 w-full bg-red-700">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {!isSignInForm
            ? "Already registered? Sign In Now."
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
