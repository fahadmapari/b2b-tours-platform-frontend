"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useUserStore } from "@/store/userStore";
import { clearJWT } from "@/lib/utils";
import Cart from "./Cart";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Separator } from "../ui/separator";

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

        {isAuthenticated ? (
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
            <Popover>
              <PopoverTrigger>
                <div>
                  <Avatar className="cursor-pointer">
                    <AvatarFallback className="bg-green-900 text-white font-medium text-xs">
                      CN
                    </AvatarFallback>
                  </Avatar>
                </div>
              </PopoverTrigger>
              <PopoverContent className="relative z-20">
                <div className="bg-white mt-1 mr-4 rounded-lg py-4 flex flex-col gap-2">
                  <div className="mx-4 flex items-center gap-2">
                    <Avatar className="cursor-pointer">
                      <AvatarFallback className="bg-green-900 text-white font-medium text-xs">
                        CN
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-base font-medium">John Doe</span>
                      <span className="text-sm">user@gmail.com</span>
                    </div>
                  </div>

                  <Separator />

                  <Link className="pb-1 mx-4" href={"/profile"}>
                    Profile
                  </Link>

                  <Separator />

                  <Button
                    variant="outline"
                    className="cursor-pointer mx-4 bg-red-400 text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
