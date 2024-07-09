import { useContext } from "react";
import { CartContext } from "../../../App";

const CartFooter = ({setOpenCart} : {setOpenCart : React.Dispatch<React.SetStateAction<boolean>>}) => {
    const { cart, setCart } = useContext(CartContext);
    const handleCheckout = () => {
      setCart([]);
      localStorage.removeItem("cart");
      setOpenCart(false);
    }
    return (
      <div className="p-4">
        {cart.length > 0 && (
          <button onClick={handleCheckout} className="mt-auto w-full bg-orange p-2 rounded-lg font-bold">
            Checkout
          </button>
        )}
      </div>
    );
  };
  export default CartFooter;