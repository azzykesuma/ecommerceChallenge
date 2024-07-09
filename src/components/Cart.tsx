import {motion} from 'framer-motion'
const Cart = () => {
  return (
    <motion.div
    className='absolute top-16 w-[90%] left-4 p-4 rounded-lg shadow-lg h-[200px] z-2'
      initial={{
        y: 30,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      exit={{
        y: 30,
        opacity: 0
      }}
      style={{
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <h3 className='font-bold'>Cart</h3>
      <div className='flex items-center justify-center h-full'>
        <p className='text-grayish-blue font-bold'>Your cart is empty</p>
      </div>
    </motion.div>
  )
}

export default Cart
