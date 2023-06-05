import { FaBars } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import NavItem from "./NavItem";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Repository",
    link: "/repository",
  },
  {
    name: "Course",
    link: "/course",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Sign in",
    link: "/signin",
  },
  { name: "Sign Up", link: "/signup" },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FaBars className="text-3xl text-black lg:hidden" />
      </Button>
      {/* MOBILE MENU */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="lg:hidden"
      >
        <div className="flex flex-col">
          {navItems.slice(0, -2).map((item, index) => {
            const { name, link } = item;
            return (
              <MenuItem key={index} onClick={handleClose}>
                <NavItem name={name} link={link} />
              </MenuItem>
            );
          })}
        </div>
        <div className="flex flex-col">
          {navItems.slice(-2).map((item, index) => {
            const { name, link } = item;
            return (
              <MenuItem key={index} onClick={handleClose}>
                <NavItem name={name} link={link} />
              </MenuItem>
            );
          })}
        </div>
      </Menu>

      {/* WEB MENU */}

      <div className=" gap-20 items-center hidden md:text-xl lg:flex whitespace-nowrap">
        <div className="flex gap-10 ">
          {navItems.slice(0, -2).map((item, index) => {
            const { name, link } = item;
            return <NavItem key={index} name={name} link={link} />;
          })}
        </div>

        <div className="flex gap-8">
          {navItems.slice(-2).map((item, index) => {
            const { name, link } = item;
            return <NavItem key={index} name={name} link={link} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
