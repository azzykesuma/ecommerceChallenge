import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import { motion } from "framer-motion";
import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";

const isMobile = window.matchMedia("(max-width: 768px)").matches;
const CartSection = () => {
  const [inputQty, setInputQty] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    if (cart && cart.length) {
      setInputQty(cart[0].qty);
    }
  }, [cart]);
  const handleInputChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setInputQty((prev) => prev + 1);
    } else {
      if (inputQty === 0) return;
      setInputQty((prev) => prev - 1);
    }
  };
  const handleAddToCart = () => {
    if (inputQty === 0) return;
    const item = {
      id: 1,
      qty: inputQty,
      name: "Fall Limited Edition Sneakers",
      price: 125,
      imgSource: "assets/images/image-product.jpg",
    };
    setCart([item]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className={isMobile ? undefined : 'grid grid-cols-[40%_60%] gap-2'}>
      <section className=" flex items-center bg-light-grayish-blue py-0 px-6 rounded-lg justify-between">
        <motion.button
          initial={{ scale: 1, opacity: 1}}
          whileHover={{ scale: 1.1, opacity: 0.7}}
          whileTap={{ scale: 0.9 }}
          disabled={inputQty === 0}
          onClick={() => handleInputChange("decrement")}
        >
          <img src={minusIcon} alt="reduce cart qty" />
        </motion.button>
        <input
          className="p-2 bg-light-grayish-blue text-center w-full"
          value={inputQty}
          type="number"
          onChange={(e) => setInputQty(parseInt(e.target.value))}
        />
        <motion.button
          onClick={() => handleInputChange("increment")}
          initial={{ scale: 1, opacity: 1}}
          whileHover={{ scale: 1.1, opacity: 0.7}}
          whileTap={{ scale: 0.9 }}
        >
          <img src={plusIcon} alt="increase cart qty" />
        </motion.button>
      </section>
      <motion.button
        initial={{ scale: 1, opacity: 1}}
        whileHover={{ scale: 1.05, opacity: 0.7}}
        whileTap={{ scale: 0.9, opacity: 1}}
        onClick={handleAddToCart}
        className={`bg-orange rounded-lg flex justify-center p-3 gap-4 ont-bold text-very-dark-blue ${isMobile ? 'mt-3' : undefined}`} >
        <span>
          <img src={cartIcon} alt="cart icon" />
        </span>
        Add to cart
      </motion.button>
    </div>
  );
};

export default CartSection;
