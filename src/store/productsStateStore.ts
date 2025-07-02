import { create } from "zustand";

type ProductsStateStore = {
  showFilters: boolean;
  setShowFilters: () => void;
};

export const useProductsStateStore = create<ProductsStateStore>()((set) => ({
  showFilters: true,
  setShowFilters: () => set((state) => ({ showFilters: !state.showFilters })),
}));
