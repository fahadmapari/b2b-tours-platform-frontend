import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 border-t border-gray-200 bg-white w-full text-xs px-4 py-1 flex justify-between items-center">
      <span>Copyright @ 2025 LocalHost - All rights reserved</span>

      <div className="flex items-center gap-2 font-medium">
        <div className="flex items-center gap-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms and Condition</Link>
          <Link href="#">Impressum</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </div>

        <div className="w-0.5 h-3 rounded-full bg-green-900" />

        <div className="flex items-center gap-2 text-sm">
          <FaFacebookSquare />

          <SiLinkedin />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
