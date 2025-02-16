import ProductBasicDetailsForm from "./ProductBasicDetailsForm/ProductBasicDetailsForm.jsx";
import ProductWarrantyDetailsFrom from "./ProductWarrantyDetailsForm/ProductWarrantyDetailsFrom.jsx";
import { useState } from "react";

const ProductForm = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNextFormRendering = () => {
    setCurrentForm((prevState) => prevState + 1);
  };

  const handleBackFormRendering = () => {
    setCurrentForm((prevState) => prevState - 1);
  };

  const productFormMapper = {
    1: (
      <ProductBasicDetailsForm
        handleNextFormRendering={handleNextFormRendering}
      />
    ),
    2: (
      <ProductWarrantyDetailsFrom
        handleBackFormRendering={handleBackFormRendering}
      />
    ),
  };

  const renderProductForms = () => {
    return productFormMapper[currentForm];
  };

  return <div className="mt-9">{renderProductForms()}</div>;
};

export default ProductForm;
