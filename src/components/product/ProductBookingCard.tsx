import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ProductBookingCard = () => {
  return (
    <div className="w-[444px]">
      <div className="w-full bg-white rounded-2xl p-4">
        <div className="text-lg font-medium mb-4">Instant Confirmation</div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-normal required">Start Time:</span>
            <input
              type="time"
              className="w-full rounded-lg border-gray-300 border p-2 text-sm"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <span className="font-normal required">Travelers:</span>
              <input
                type="number"
                step={1}
                className="w-full rounded-lg border-gray-300 border p-2 text-sm"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <span className="font-normal">Extra hours (10 EUR):</span>
              <input
                type="number"
                step={1}
                className="w-full rounded-lg border-gray-300 border p-2 text-sm"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="font-normal">Price:</span>
            <div className="font-semibold text-lg">
              100 <span className="font-normal text-sm">EUR</span>
            </div>
            <Tooltip>
              <TooltipTrigger className="text-left">
                <div className="text-sm font-semibold">
                  Maximum limit per group of 15 pax
                </div>
              </TooltipTrigger>
              <TooltipContent></TooltipContent>
            </Tooltip>

            <Popover>
              <PopoverTrigger className="underline text-green-900 cursor-pointer text-left pt-1">
                Price Breakup
              </PopoverTrigger>
              <PopoverContent>
                Place content for the popover here.
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <Button className="flex-1 py-6 rounded-lg text-base bg-green-900 cursor-pointer">
          Book tour
        </Button>
        <Button className="flex-1 py-6 rounded-lg text-base bg-white text-black hover:text-white cursor-pointer">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductBookingCard;
