import PropTypes from "prop-types";
const Description = ({ description, style }) => {
  return <p className={style}>{description}</p>;
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Description;
