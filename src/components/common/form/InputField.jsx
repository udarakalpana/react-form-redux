import PropTypes from "prop-types";
const InputField = ({ type, name, labelName, handleInputField }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="input-filed"
        onChange={handleInputField}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  handleInputField: PropTypes.func.isRequired,
};

export default InputField;
