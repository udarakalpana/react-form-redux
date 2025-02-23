import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import {useDispatch} from "react-redux";
import {storeProductBasicDetails} from "../../../../utlities/slice/productBasicDetailsSlice.js";

const ProductBasicDetailsForm = ({
  productBasicDetails,
  setProductBasicDetails,
  handleNextFormRendering,
}) => {
    const dispatch = useDispatch()
  const handleInputField = (event) => {
    const { name, value } = event.target;

    setProductBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(storeProductBasicDetails(productBasicDetails))
        handleNextFormRendering()
    }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div>
        <h1 className="text-lg font-bold">Product Basic Details</h1>
      </div>
      <InputField
        type="text"
        name="product_name"
        labelName="Product Name"
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_price"
        labelName="Product Price"
        handleInputField={handleInputField}
      />

      <FormHandlingButton
        buttonName="Fill Warranty Details"
        btnStyle="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      />
    </form>
  );
};

ProductBasicDetailsForm.propTypes = {
  productBasicDetails: PropTypes.object.isRequired,
  setProductBasicDetails: PropTypes.func.isRequired,
  handleNextFormRendering: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;
