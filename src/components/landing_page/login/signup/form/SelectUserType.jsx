import PropTypes from "prop-types";

const SelectUserType = ({ contents, label, disabled, onChange }) => {
  return (
    <select
      required
      className="w-full md:text-lg  text-xs px-6 py-2 md:py-4 rounded-lg "
      onChange={onChange}
    >
      <option value="" disabled={disabled}>
        {label}
      </option>
      {contents.sort().map((content, index) => {
        return (
          <option key={index} value={content}>
            {content}
          </option>
        );
      })}
    </select>
  );
};

SelectUserType.propTypes = {
  contents: PropTypes.array.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SelectUserType;
