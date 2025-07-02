import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const ProductCard = () => {
  return (
    <Card className="px-4">
      <div className="flex  gap-4">
        <div className="h-[300px] w-[300px] rounded-md overflow-hidden">
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
            <div className="p-4 rounded-md bg-gray-200 w-full flex justify-between items-center">
              <span className="font-semibold">
                Salzburg Private Guided Walking Tour
              </span>
              <Button className="bg-amber-500 text-black hover:bg-amber-400 cursor-pointer">
                Add to cart
              </Button>
            </div>

            <div>
              <ul className="list-inside list-disc text-sm my-4">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
                <li>Verify billing address</li>
                <li>Verify billing address</li>
              </ul>
            </div>

            <div>
              <Badge>INSTANT</Badge>
            </div>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center gap-4">
              <div>2 Hours</div>
              <div>04:00 - 23:00</div>
              <div>Walking Tour</div>
              <div>English</div>
            </div>
            <div>Price: ₹100</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
