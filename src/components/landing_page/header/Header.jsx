import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-10 border-2 border-black bg-white flex items-center justify-between p-6">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
