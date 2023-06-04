import PropTypes from "prop-types";
const LearnMore = ({ name, style }) => {
  return <button className={style}>{name}</button>;
};

LearnMore.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default LearnMore;
