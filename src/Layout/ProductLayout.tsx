import { ReactNode } from 'react'

const ProductLayout = ({children} : {children : ReactNode} ) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div className={`p-4 ${isMobile ? '' : 'w-1/2'}`}>
      {children}
    </div>
  )
}

export default ProductLayout