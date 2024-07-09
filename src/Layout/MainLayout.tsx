import { ReactNode } from 'react'

const MainLayout = ({children, className} : {children : ReactNode, className: string}) => {
    const classes = `h-screen ${className}`
  return (
    <main className={classes}>
      {children}
    </main>
  )
}

export default MainLayout
