import hamburgerMenu from "../assets/images/icon-menu.svg";
import profileImg from "../assets/images/image-avatar.png";
import cartImg from "../assets/images/icon-cart.svg";
import { useContext, useState } from "react";
import Cart from "./Cart";
import { AnimatePresence } from "framer-motion";
import { CartContext } from "../App";
import DesktopNavs from "./ui/DesktopNavs";
import {motion} from "framer-motion";

type headerProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setOpen }: headerProps) => {
  const [openCart, setOpenCart] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenCart = () => {
    setOpenCart((prev) => !prev);
  };
  const { cart } = useContext(CartContext);
  const qty = cart.length && cart[0].qty;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <header className="flex bg-white justify-between items-center p-4 relative">
      <div className="flex items-center gap-4">
        {isMobile && (
          <button onClick={handleOpen}>
            <img src={hamburgerMenu} alt="menu" />
          </button>
        )}
        <h1 className="font-bold text-3xl">sneakers</h1>
        {!isMobile && <div className="ml-5 mt-1"><DesktopNavs /></div>}
      </div>
      <div className="flex gap-4">
        <button onClick={handleOpenCart} className="relative">
          <img src={cartImg} alt="cart-icon" />
          {qty > 0 && (
            <span className="absolute bottom-3 right-[-5px] bg-orange p-1 text-[8px] rounded-full text-white">
              {qty}
            </span>
          )}
        </button>

        <AnimatePresence>
          {openCart && (
            <Cart>
              <Cart.Header>Cart</Cart.Header>
              <div className="border-b-2 border-gray-300" />
              <Cart.Body />
              <Cart.Footer setOpenCart={setOpenCart} />
            </Cart>
          )}
        </AnimatePresence>
        <motion.img
          initial={{ scale: 1, opacity: 1, border: 'none' }}
          whileHover={{ scale: 1.1, opacity: 0.7, border: '2px solid orange' }}
          className="w-6 h-6 rounded-full cursor-pointer" src={profileImg} alt="profile" />
      </div>
    </header>
  );
};

export default Header;
