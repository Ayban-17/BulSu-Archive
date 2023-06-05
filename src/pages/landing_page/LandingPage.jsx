import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../../components/landing_page/header/Header";
import Home from "./Home";
import Repository from "./Repository";
import Course from "./Course";
import About from "./About";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LandingPage = () => {
  const location = useLocation();

  // Determine if the Header should be rendered
  let showHeader =
    location.pathname !== "/signin" && location.pathname !== "/signup";

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default LandingPage;
