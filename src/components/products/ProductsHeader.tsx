"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useProductsStateStore } from "@/store/productsStateStore";

const SortBy = () => {
  return (
    <Select defaultValue="apple">
      <SelectTrigger className="w-full">
        <div className="flex items-center gap-2">
          Sort by
          <SelectValue placeholder="Sort by" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const ProductsHeader = () => {
  const { showFilters, setShowFilters } = useProductsStateStore();

  return (
    <div className="flex justify-between items-center my-6">
      <h2>Products</h2>

      <div className="flex gap-2 items-center">
        <Button className="cursor-pointer" onClick={() => setShowFilters()}>
          {showFilters ? "Hide" : "Show"} Filters
        </Button>
        <SortBy />
      </div>
    </div>
  );
};

export default ProductsHeader;
