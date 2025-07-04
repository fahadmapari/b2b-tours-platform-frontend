import ProductsFilters from "@/components/products/ProductsFilters";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsList from "@/components/products/ProductsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

import CustomPagination from "@/components/common/CustomPagination";
import SearchBlock from "@/components/dashboard/SearchBlock";

const page = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="my-4">
        <SearchBlock className="rounded-2xl border-0" />
      </div>

      <div>
        <ProductsHeader />
      </div>

      <div className="h-[calc(100%-215px)] flex items-start gap-4">
        <ProductsFilters />
        <ScrollArea className="w-full h-full pr-3">
          <>
            <ProductsList />
            <CustomPagination />
          </>
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
