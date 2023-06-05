import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GoToAction = ({ text, action, link }) => {
  return (
    <p className="text-white text-sm flex justify-center p-4 gap-2">
      {text}
      <Link to={link}>
        <span className="text-yellow font-semibold"> {action}</span>
      </Link>
    </p>
  );
};

GoToAction.propTypes = {
  text: PropTypes.string,
  action: PropTypes.string,
  link: PropTypes.string,
};

export default GoToAction;
