import { createContext, useState, Dispatch, SetStateAction  } from "react";
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
  name: string;
  price: number;
};

interface CartContextType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}
export const MenuContext = createContext(false);
const cartString = localStorage.getItem('cart');
const cartVal = cartString ? JSON.parse(cartString) : [];
const isMobile = window.matchMedia("(max-width: 768px)").matches;
export const CartContext = createContext<CartContextType>({
  cart: cartVal,
  setCart: () => {},
});
function App() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(cartVal);
  const menuOPen = isMobile && open;
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <MenuContext.Provider value={open}>
        <MainLayout className={open ? "brightness-50" : ""}>
          <Header setOpen={setOpen}/>
          {!isMobile && <div className="border-b-2 border-gray-300 mb-2"></div>}
          <div className={isMobile ? undefined : 'flex mt-28'}>
            <Hero />
            <ProductLayout>
              <ProductDetail />
              <div className="mt-4">
                <CartSection />
              </div>
            </ProductLayout>
          </div>
        </MainLayout>
        <AnimatePresence>
          {menuOPen && <Sidebar setOpen={setOpen} />}
        </AnimatePresence>
      </MenuContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
