"use client";

import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

interface InitialAuthProps {
  accessToken?: string;
}

const InitialAuth = ({ accessToken }: InitialAuthProps) => {
  const { setIsAuthenticated } = useUserStore();

  useEffect(() => {
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });
  return null;
};

export default InitialAuth;
