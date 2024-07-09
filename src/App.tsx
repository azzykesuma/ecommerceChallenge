import { createContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import MainLayout from "./Layout/MainLayout";
import ProductDetail from "./components/ProductDetail";
import CartSection from "./components/CartSection";
import ProductLayout from "./Layout/ProductLayout";

type CartItem = {
  id: number;
  qty: number;
};
export const MenuContext = createContext(false);
const isMobile = window.matchMedia("(max-width: 768px)").matches;
export const CartContext= createContext<CartItem[]>([]);

function App() {
  const [open, setOpen] = useState(false);
  const menuOPen = isMobile && open;
  return (
    <CartContext.Provider value={[]}>
      <MenuContext.Provider value={open}>
        <MainLayout className={open ? "brightness-50" : ""}>
          <Header setOpen={setOpen} />
          <Hero />
          <ProductLayout>
            <ProductDetail />
            <div className="mt-4"><CartSection /></div>
          </ProductLayout>
        </MainLayout>
          <AnimatePresence>
            {menuOPen && <Sidebar setOpen={setOpen} />}
          </AnimatePresence>
      </MenuContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
