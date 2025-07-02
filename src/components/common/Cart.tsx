import { useRouter } from "next/navigation";
import { IoMdCart } from "react-icons/io";

const Cart = () => {
  const { push } = useRouter();
  return (
    <div className="cursor-pointer" onClick={() => push("/cart")}>
      <IoMdCart size={28} />
    </div>
  );
};

export default Cart;
