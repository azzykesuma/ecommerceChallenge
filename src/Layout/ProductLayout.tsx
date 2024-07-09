import { ReactNode } from 'react'

const ProductLayout = ({children} : {children : ReactNode} ) => {
  return (
    <div className='p-4'>
      {children}
    </div>
  )
}

export default ProductLayout
