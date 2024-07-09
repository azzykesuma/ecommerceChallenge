import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";

const CartSection = () => {
  const [inputQty, setInputQty] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if(cart) {
      const cartItems = JSON.parse(cart);
      setInputQty(cartItems[0].qty);
    }
  }, []);
  const cart = useContext(CartContext);
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
    };
    if(cart.length > 0) {
        cart[0].qty = inputQty;
    } else {
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <>
      <section className="flex items-center bg-light-grayish-blue py-2 px-6 rounded-lg justify-between">
        <button
          disabled={inputQty === 0}
          onClick={() => handleInputChange("decrement")}
        >
          <img src={minusIcon} alt="reduce cart qty" />
        </button>
        <input
          className="p-2 bg-light-grayish-blue text-center"
          value={inputQty}
          type="number"
          onChange={(e) => setInputQty(parseInt(e.target.value))}
        />
        <button onClick={() => handleInputChange("increment")}>
          <img src={plusIcon} alt="increase cart qty" />
        </button>
      </section>
      <button onClick={handleAddToCart} className="bg-orange rounded-lg w-full flex justify-center p-3 gap-4 mt-3 font-bold text-very-dark-blue">
        <span>
          <img src={cartIcon} alt="cart icon" />
        </span>
        Add to cart
      </button>
    </>
  );
};

export default CartSection;
