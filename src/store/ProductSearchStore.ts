import { create } from "zustand";

type ProductSearchStore = {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

export const useProductSearchStore = create<ProductSearchStore>()((set) => ({
  selectedCountry: "",
  setSelectedCountry: (country: string) => set({ selectedCountry: country }),
  selectedCity: "",
  setSelectedCity: (city: string) => set({ selectedCity: city }),
  selectedDate: new Date(),
  setSelectedDate: (date: Date) => set({ selectedDate: date }),
}));
