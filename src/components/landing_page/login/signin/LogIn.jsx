import Logo from "../../header/Logo";
import { UilEnvelope, UilLock, UilEyeSlash } from "@iconscout/react-unicons";
import "../index.css";
import { useState } from "react";
import GoToAction from "../reusable/goToAction";
import Submit from "../reusable/Submit";

const logo = " text-4xl sm:text-5xl letter-shadow ";
const LogIn = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <main className="gate-bg-sign-in-register font-poppins pt-20">
      <h1 className="py-5 flex justify-center z-10">
        <Logo font={logo} />
      </h1>
      <div className="container p-4">
        <form
          className="login-form p-6 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl text-white font-semibold login-label">
            Login
          </h1>
          <div className="field ">
            <UilEnvelope color="white" />
            <input
              type="email"
              name="email"
              placeholder="Enter Your BulSU Email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="field">
            <UilLock color="white" />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              onChange={handleInputChange}
            />
            <UilEyeSlash color="white" />
          </div>
          <Submit action="Login" />
        </form>
        <GoToAction text="Not a member?" action="Signup Now" link="/signup" />
      </div>
    </main>
  );
};

export default LogIn;
