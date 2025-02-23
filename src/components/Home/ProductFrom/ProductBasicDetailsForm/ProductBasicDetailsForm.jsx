import InputField from "../../../common/form/InputField.jsx";
import PropTypes from "prop-types";
import FormHandlingButton from "../../../common/form/FormHandlingButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  resetProductBasicDetails,
  storeProductBasicDetails,
} from "../../../../utlities/slice/productBasicDetailsSlice.js";
import { useEffect, useState } from "react";
import RestBtn from '../../../../assets/icon/reset.png';

const ProductBasicDetailsForm = ({
  productBasicDetails,
  setProductBasicDetails,
  handleNextFormRendering,
}) => {
  const [existingProductDetails, setExistingProductDetails] = useState({});
  const dispatch = useDispatch();
  const alreadyAddedProductDetails = useSelector(
    (state) => state.productDetails.product.productBasicDetails,
  );

  useEffect(() => {
    setExistingProductDetails(alreadyAddedProductDetails);
  }, [alreadyAddedProductDetails]);
  const handleInputField = (event) => {
    const { name, value } = event.target;

    setProductBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     if (productBasicDetails.product_name !== '') {
         dispatch(storeProductBasicDetails(productBasicDetails));
         handleNextFormRendering();
         return
     }

      dispatch(storeProductBasicDetails(existingProductDetails));

    handleNextFormRendering();
  };

  const resetBasicDetailsForm = () => {
    dispatch(resetProductBasicDetails());
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <button type="button" onClick={resetBasicDetailsForm}>
        <img src={RestBtn} alt='reset buton' />
      </button>
      <div>
        <h1 className="text-lg font-bold">Product Basic Details</h1>
      </div>
      <InputField
        type="text"
        name="product_name"
        labelName="Product Name"
        value={existingProductDetails.product_name}
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_quantity"
        labelName="Product Quantity"
        value={existingProductDetails.product_quantity}
        handleInputField={handleInputField}
      />
      <InputField
        type="number"
        name="product_price"
        labelName="Product Price"
        value={existingProductDetails.product_price}
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
