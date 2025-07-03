import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  FaBusinessTime,
  FaCheck,
  FaClock,
  FaLanguage,
  FaWalking,
} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

const ProductCard = () => {
  return (
    <Card className="px-4">
      <div className="flex  gap-4">
        <div className="h-[250] w-[350px] rounded-md overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/tour.jpg"
            width={500}
            height={500}
            alt="tour"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <div className="pl-4 pr-1 py-1 rounded-md bg-gray-100 w-full flex justify-between items-center">
              <span className="font-semibold">
                Salzburg Private Guided Walking Tour
              </span>
              <Button className="bg-amber-500 text-black hover:bg-amber-400 cursor-pointer">
                Add to cart
              </Button>
            </div>

            <div>
              <ul className="list-inside text-sm my-4 list-none">
                <li className="flex items-center gap-1">
                  <FaCheck className="text-green-500" /> Highlights of the tour
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck className="text-green-500" /> Highlights of the tour
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck className="text-green-500" /> Highlights of the tour
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck className="text-green-500" /> Highlights of the tour
                </li>
              </ul>
            </div>

            <div>
              <Badge className="bg-yellow-300 text-black flex items-center gap-1 py-1 px-2 rounded-full">
                <AiFillThunderbolt />
                INSTANT
              </Badge>
            </div>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaClock /> 2 Hours
              </div>
              <div className="flex items-center gap-2">
                <FaBusinessTime /> 04:00 - 23:00
              </div>
              <div className="flex items-center gap-2">
                <FaWalking /> Walking Tour
              </div>
              <div className="flex items-center gap-2">
                <FaLanguage /> English
              </div>
            </div>
            <div className="flex items-center gap-1 text-lg font-medium">
              <span className="text-sm font-normal">Price:</span> $100
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
