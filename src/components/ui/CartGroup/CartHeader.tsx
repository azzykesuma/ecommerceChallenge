import { ReactNode } from 'react'

const CartHeader = ({children} : {children: ReactNode}) => {
  return (
    <div className="p-4">
    <h3 className="font-bold mb-2">{children}</h3>
  </div>
  )
}

export default CartHeader
