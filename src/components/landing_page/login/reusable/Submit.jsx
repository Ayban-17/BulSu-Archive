import PropTypes from "prop-types";

const Submit = ({ action, disabled }) => {
  return (
    <button
      type="submit"
      className={` rounded-lg p-3 font-semibold text-white w-full ${
        disabled ? "bg-disabled text-opacity-10 opacity-75" : "bg-red"
      }`}
      disabled={disabled}
    >
      {action}
    </button>
  );
};

Submit.propTypes = {
  action: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Submit;
