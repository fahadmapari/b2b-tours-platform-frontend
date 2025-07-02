import ProductCard from "./ProductCard";

const PRODUCTS = [
  1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const ProductsList = () => {
  return (
    <div className="flex flex-col gap-4">
      {PRODUCTS.map((p) => (
        <ProductCard key={p} />
      ))}
    </div>
  );
};

export default ProductsList;
