import hamburgerMenu from '../assets/images/icon-menu.svg'
import profileImg from '../assets/images/image-avatar.png'
import cartImg from '../assets/images/icon-cart.svg'
import { useState } from 'react';
import Cart from './Cart';
import { AnimatePresence } from 'framer-motion';

type headerProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const Header = ({setOpen} : headerProps) => {
  const [openCart, setOpenCart] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleOpenCart = () => {
    setOpenCart(prev => !prev)
  }
  return (
    <header className='flex bg-white justify-between items-center p-4 relative'>
      <div className='flex items-center gap-4'>
        <button onClick={handleOpen}>
            <img src={hamburgerMenu} alt="menu" />
        </button>
        <h1 className='font-bold text-3xl'>sneakers</h1>
      </div>
      <div className='flex gap-4'>
        <button onClick={handleOpenCart} className='relative'>
          <img src={cartImg} alt='cart-icon'/>
          <span className='absolute bottom-3 right-[-5px] bg-orange p-1 text-[8px] rounded-full text-white'>1</span>
        </button>
        <AnimatePresence>
          {openCart && <Cart />}
        </AnimatePresence>
        <img className='w-6 h-6 rounded-full' src={profileImg} alt="profile" />
      </div>
    </header>
  )
}

export default Header
