import { create } from "zustand";

type UserStore = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  cartItems: string[];
  setCartItems: (cartItem: string) => void;
};

export const useUserStore = create<UserStore>()((set) => ({
  isAuthenticated: false,
  count: 1,
  setIsAuthenticated: (isAuthenticated) =>
    set(() => ({ isAuthenticated: isAuthenticated })),
  cartItems: [],
  setCartItems: (cartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, cartItem] })),
}));
