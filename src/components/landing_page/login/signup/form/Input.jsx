import PropTypes from "prop-types";

const Input = ({ type, label }) => {
  return (
    <input
      type={type}
      placeholder={label}
      name={label}
      required
      className="w-full md:text-lg  text-xs px-6 py-2 rounded-lg"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
