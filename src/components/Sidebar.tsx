import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'; 'react-router-dom'
import closeBtn from '../assets/images/icon-close.svg'
type SidebarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};


const Sidebar = ({setOpen} : SidebarProps) => {
  const handleClose = () => {
    setOpen(false)
  }
  const lists = [
    {
      name: 'Collections',
      url: '/'
    }, 
    {
      name: 'Men',
      url: '/'
    }, 
    {
      name: 'Women',
      url: '/'
    }, 
    {
      name: 'About',
      url: '/'
    }, 
    {
      name: 'Contact',
      url: '/'
    }, 
  ]
  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '60%',
        backgroundColor: 'white',
        padding: '2rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}
      transition={{
        bounce: 0,
        duration: 0.2
      }}
      initial={{
        x: '-100%'
      }}
      animate={{
        x: 0
      }}
      exit={{
        x: '-100%'
      }}
    >
      <button onClick={handleClose} className='mb-8'>
        <img src={closeBtn} alt='close-menu-sidebar' />
      </button>
      <nav>
        <ul className='flex flex-col gap-4'>
          {lists.map(list => (
            <li className='font-bold' key={list.name}>
              <Link to={list.url}>{list.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.nav>
  );
};

export default Sidebar
