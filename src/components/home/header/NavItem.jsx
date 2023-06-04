import PropTypes from "prop-types";
const NavItem = ({ name }) => {
  return <p className="lg:text-lg font-poppins font-thin ">{name}</p>;
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
};
export default NavItem;
