import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const Icon = ({ icon, style }) => {
  return <FontAwesomeIcon icon={icon} className={` ${style}`} />;
};
Icon.propTypes = {
  icon: PropTypes.object,
  style: PropTypes.string,
};

export default Icon;
