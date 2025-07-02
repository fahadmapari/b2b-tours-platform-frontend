"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
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

const Icon = () => {
  return (
    <Avatar className="w-8 h-8 rounded-full">
      <AvatarImage src="/globe.svg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

const ConfirmationTypeSelector = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Duration</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Duration</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>1 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>1.5 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>2 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>2.5 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>3 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>3.5 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>4 Hour</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const DurationSelector = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Duration</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Duration</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>1 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>1.5 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>2 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>2.5 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>3 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>3.5 Hour</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>4 Hour</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const LanguageSelector = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon />
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
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
    </div>
  );
};

const PriceSelector = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon />
      <div className="flex items-center gap-2">
        <Input placeholder="Min Price" />
        <span>to</span>
        <Input placeholder="Max Price" />
      </div>
    </div>
  );
};

const ProductsFilters = () => {
  const { showFilters } = useProductsStateStore();

  if (!showFilters) return null;

  return (
    <Card className="w-[450px] px-4">
      <div>
        <span className="text-2xl font-semibold">Filters</span>
      </div>

      <div>
        <LanguageSelector />
      </div>

      <div>
        <PriceSelector />
      </div>

      <div>
        <DurationSelector />
      </div>

      <div>
        <ConfirmationTypeSelector />
      </div>

      <div>
        <Button className="w-full cursor-pointer mt-4">Reset Filters</Button>
      </div>
    </Card>
  );
};

export default ProductsFilters;
