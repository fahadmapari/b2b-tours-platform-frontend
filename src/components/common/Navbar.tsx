"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useUserStore } from "@/store/userStore";
import { clearJWT } from "@/lib/utils";
import Cart from "./Cart";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useUserStore();

  const handleLogout = () => {
    clearJWT();
    setIsAuthenticated(false);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div>
        <h3>LocalHost</h3>
      </div>

      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <Cart />

        {!isAuthenticated ? (
          <div className="flex gap-4 items-center uppercase">
            <Link href="/login">
              <Button className="uppercase cursor-pointer" variant="outline">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="uppercase cursor-pointer">Register</Button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <span>Hi, User</span>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
