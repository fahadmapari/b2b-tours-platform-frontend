import React from "react";
import ProductHeader from "./ProductHeader";
import ProductImageGallery from "./ProductImageGallery";

const ProductPage = () => {
  return (
    <div>
      <ProductHeader />
      <div className="flex gap-14 items-start">
        <div className="flex-1">
          <ProductImageGallery />
        </div>
        <div className="w-[444px]">ADD TO CART</div>
      </div>
    </div>
  );
};

export default ProductPage;
