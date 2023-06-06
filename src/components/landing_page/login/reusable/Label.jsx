import PropTypes from "prop-types";
const Label = ({ label }) => {
  return (
    <h1 className="w-full rounded-lg text-3xl text-white font-semibold register-label ml-5">
      {label}
    </h1>
  );
};

Label.propTypes = {
  label: PropTypes.string,
};

export default Label;
