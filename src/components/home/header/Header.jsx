import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
