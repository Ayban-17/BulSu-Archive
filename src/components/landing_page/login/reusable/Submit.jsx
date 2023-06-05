import PropTypes from "prop-types";

const Submit = ({ action }) => {
  return (
    <button
      type="submit"
      className="bg-red rounded-lg p-3 font-semibold text-white w-full"
    >
      {action}
    </button>
  );
};

Submit.propTypes = {
  action: PropTypes.string,
};

export default Submit;
