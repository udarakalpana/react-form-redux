import PropTypes from "prop-types";

const FormHandlingButton = ({executingMethod, buttonName, btnStyle}) => {
  return (
    <button
      type="button"
      onClick={executingMethod}
      className={btnStyle}
    >
        {buttonName}
    </button>
  );
};

FormHandlingButton.propTypes = {
    executingMethod: PropTypes.func.isRequired,
    buttonName: PropTypes.string.isRequired,
    btnStyle: PropTypes.string.isRequired
}

export default FormHandlingButton;
