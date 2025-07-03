import ProductsFilters from "@/components/products/ProductsFilters";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsList from "@/components/products/ProductsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SelectedSearchValues from "@/components/common/SelectedSearchValues";

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
      <Pagination className="py-2 justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-white bg-green-900" href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-black bg-white" href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-black bg-white" href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default page;
