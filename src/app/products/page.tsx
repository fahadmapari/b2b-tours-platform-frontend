import ProductsFilters from "@/components/products/ProductsFilters";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsList from "@/components/products/ProductsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

import SelectedSearchValues from "@/components/common/SelectedSearchValues";
import CustomPagination from "@/components/common/CustomPagination";

const page = () => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <SelectedSearchValues />
      </div>

      <div>
        <ProductsHeader />
      </div>

      <div className="h-[calc(100%-200px)] flex items-start gap-4">
        <ProductsFilters />
        <ScrollArea className="w-full h-full pr-3">
          <ProductsList />
        </ScrollArea>
      </div>
      <CustomPagination />
    </div>
  );
};

export default page;
