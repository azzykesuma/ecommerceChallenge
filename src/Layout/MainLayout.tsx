import { ReactNode } from 'react'

const MainLayout = ({children, className} : {children : ReactNode, className: string}) => {
    const classes = `h-screen max-w-[1200px] mx-auto ${className}`
  return (
    <main className={classes}>
      {children}
    </main>
  )
}

export default MainLayout
