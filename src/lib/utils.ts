import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function storeJWT(token: string) {
  localStorage.setItem("auth_token", token);
}

export function getJWT() {
  return localStorage.getItem("auth_token");
}

export function clearJWT() {
  return localStorage.removeItem("auth_token");
}
