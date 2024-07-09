import { useContext } from "react";
import { CartContext } from "../../../App";
import trashIcon from "../../../assets/images/icon-delete.svg";
import imageProduct from "../../../assets/images/image-product-1-thumbnail.jpg";
import { motion } from "framer-motion";

const CartBody = () => {
  const { cart, setCart } = useContext(CartContext);

  const clearCart = () => {
    setCart([]);
  };

  const formatUSD = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="flex h-full p-4 justify-center flex-grow">
      {cart && cart.length > 0 ? (
        <>
          {cart.map((item) => {
            const total = item.price * item.qty;
            return (
              <div
                key={item.id}
                className="flex gap-4 w-full h-full items-center"
              >
                <img
                  className="aspect-square w-14 h-14 rounded-md"
                  src={imageProduct}
                  alt={item.name}
                />
                <div>
                  <p className="text-grayish-blue font-bold text-sm">
                    {item.name}
                  </p>
                  <p className="text-grayish-blue ">
                    {formatUSD(item.price)} x {item.qty}{" "}
                    <span className="text-black font-bold">
                      {formatUSD(total)}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
          <motion.button
            onClick={clearCart}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={trashIcon} alt="delete-cart" />
          </motion.button>
        </>
      ) : (
        <p className="text-grayish-blue font-bold my-auto">
          Your cart is empty
        </p>
      )}
    </div>
  );
};

export default CartBody;
