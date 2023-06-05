import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavItem = ({ name, link }) => {
  return (
    <Link to={link}>
      <p className="lg:text-lg font-poppins font-thin ">{name}</p>
    </Link>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default NavItem;
