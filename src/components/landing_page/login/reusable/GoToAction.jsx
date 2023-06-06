import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GoToAction = ({ text, action, link, style }) => {
  return (
    <p className={"text-white text-sm flex justify-center p-4 gap-2 " + style}>
      {text}
      <Link to={link}>
        <span className={"text-yellow font-semibold " + style}> {action}</span>
      </Link>
    </p>
  );
};

GoToAction.propTypes = {
  text: PropTypes.string,
  action: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.string,
};

export default GoToAction;
