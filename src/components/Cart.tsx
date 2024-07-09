import { motion } from "framer-motion";
import { ReactNode } from "react";
import CartHeader from "./ui/CartGroup/CartHeader";
import CartFooter from "./ui/CartGroup/CartFooter";
import CartBody from "./ui/CartGroup/CartBody";
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const Cart = ({children} : {children: ReactNode}) => {
  return (
    <motion.div
      className={`${isMobile ? 'left-4' : 'right-0'} absolute top-16 w-[90%] max-w-[350px] rounded-lg shadow-lg min-h-[200px] flex flex-col z-50 bg-white`}
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 30,
        opacity: 0,
      }}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </motion.div>
  );
};

Cart.Header = CartHeader;
Cart.Body = CartBody;
Cart.Footer = CartFooter;


export default Cart;
