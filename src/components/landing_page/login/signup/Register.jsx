import Logo from "../../header/Logo";
import "../index.css";

import Form from "../signup/form/Form";

const logo = " text-4xl sm:text-5xl letter-shadow ";

const Register = () => {
  return (
    <main className="gate-bg-sign-in-register font-poppins justify-center gap-5 ">
      <h1 className="z-10 ">
        <Logo font={logo} />
      </h1>
      <div className="z-10 register-container p-6">
        <Form />
      </div>
    </main>
  );
};

export default Register;
