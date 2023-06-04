import PropTypes from "prop-types";

const Text = ({ text, style }) => {
  return <div className={style}>{text}</div>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Text;
