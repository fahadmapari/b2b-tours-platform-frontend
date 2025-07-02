"use client";

import React, { useState } from "react";
import ProductInfoTabs from "./ProductInfoTabs";
import ProductContent from "./ProductContent";

const ProductContentWrapper = () => {
  const [activeTab, setActiveTab] = useState("General Info");

  return (
    <div className="flex flex-col gap-2 my-4">
      <ProductInfoTabs
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />
      <ProductContent setActiveTab={(tab) => setActiveTab(tab)} />
    </div>
  );
};

export default ProductContentWrapper;
