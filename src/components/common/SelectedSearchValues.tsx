import { IoLocationSharp } from "react-icons/io5";

const SelectedSearchValues = () => {
  return (
    <div>
      <Item />
    </div>
  );
};

const Item = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-green-50 rounded-full w-fit p-2">
        <IoLocationSharp className="text-2xl" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium">Destination</span>
        <span className="text-sm">India, Mumbai</span>
      </div>
    </div>
  );
};

export default SelectedSearchValues;
