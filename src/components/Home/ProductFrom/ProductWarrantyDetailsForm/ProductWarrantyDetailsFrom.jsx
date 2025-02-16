import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";

const ProductWarrantyDetailsFrom = ({ handleBackFormRendering }) => {
  return (
    <form className="max-w-sm mx-auto">
      <div>
        <h1 className="text-lg font-bold">Product Warranty Details</h1>
      </div>
      <InputField
        type="text"
        name="warranty_period"
        labelName="Warranty period"
      />
      <InputField
        type="date"
        name="warranty_start_date"
        labelName="Warranty Start Date"
      />
      <InputField
        type="date"
        name="warranty_end_date"
        labelName="Warranty End Date"
      />

      <button
        type="button"
        onClick={handleBackFormRendering}
        className="text-white bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Back to basic details
      </button>
    </form>
  );
};

ProductWarrantyDetailsFrom.propTypes = {
  handleBackFormRendering: PropTypes.func.isRequired,
};

export default ProductWarrantyDetailsFrom;
