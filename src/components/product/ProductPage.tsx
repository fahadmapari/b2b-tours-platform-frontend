import React from "react";
import ProductHeader from "./ProductHeader";
import ProductImageGallery from "./ProductImageGallery";
import ProductContentWrapper from "./ProductContentWrapper";
import { ScrollArea } from "../ui/scroll-area";
import ProductBookingCard from "./ProductBookingCard";

const ProductPage = () => {
  return (
    <div className="h-full flex flex-col">
      <ProductHeader />
      <div className="h-full max-h-full overflow-hidden flex gap-6 items-start relative ">
        <ScrollArea className="flex-1 h-full max-h-full">
          <ProductImageGallery />

          <ProductContentWrapper />
        </ScrollArea>
        <ProductBookingCard />
      </div>
    </div>
  );
};

export default ProductPage;
