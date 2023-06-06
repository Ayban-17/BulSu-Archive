import PropTypes from "prop-types";
const SelectCourse = ({ contents, label, disabled }) => {
  return (
    <select
      required
      className="w-full md:text-lg  text-xs px-6 py-2 md:py-4 rounded-lg"
      disabled={disabled}
    >
      <option value="">{label}</option>
      {contents.map((content, index) => {
        return (
          <option
            key={index}
            value={content.abbr}
          >{`${content.abbr} (${content.acro})`}</option>
        );
      })}
    </select>
  );
};

SelectCourse.propTypes = {
  contents: PropTypes.array.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SelectCourse;
