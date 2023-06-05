import PropTypes from "prop-types";

const Title = ({ title, style }) => {
  return <h1 className={style}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Title;
