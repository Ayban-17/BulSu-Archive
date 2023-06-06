import PropTypes from "prop-types";
const SelectDepartment = ({ contents, label, onChange, disabled }) => {
  return (
    <select
      required
      onChange={onChange}
      className="w-full md:text-lg  text-xs px-6 py-2 md:py-4 rounded-lg"
    >
      <option value="" disabled={disabled}>
        {label}
      </option>
      {contents.map((program) => {
        return program.department.map((dept, index) => {
          return (
            <option key={index} value={dept.abbr}>
              {`${dept.abbr} (${dept.acro})`}
            </option>
          );
        });
      })}
    </select>
  );
};

SelectDepartment.propTypes = {
  contents: PropTypes.array.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SelectDepartment;
