import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";

const ProductBasicDetailsForm = ({handleNextFormRendering}) => {
  return (
    <form className="max-w-sm mx-auto">
      <div>
        <h1 className="text-lg font-bold">Product Basic Details</h1>
      </div>
      <InputField type="text" name="product_name" labelName="Product Name" />
      <InputField
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
      />
      <InputField
        type="number"
        name="product_price"
        labelName="Product Price"
      />

      <button
        type="button"
        onClick={handleNextFormRendering}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Fill warranty Details
      </button>
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
    handleNextFormRendering: PropTypes.func.isRequired,
}

export default ProductBasicDetailsForm;
