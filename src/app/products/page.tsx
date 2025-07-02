import ProductsFilters from "@/components/products/ProductsFilters";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsList from "@/components/products/ProductsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const page = () => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <ProductsHeader />
      </div>

      <div className="h-[calc(100%-100px)] flex items-start gap-4">
        <ProductsFilters />
        <ScrollArea className="w-full h-full pr-3">
          <ProductsList />
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
