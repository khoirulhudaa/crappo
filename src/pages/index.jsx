import React from 'react'
import { Hero, Navbar, Content, Footer } from '../layout'

const Homepage = () => {
  return (
    <div className='w-screen h-max overflow-x-hidden'>
      {/* Component navbar */}
      <Navbar />

      {/* Component Hero */}
      <Hero />
      
      {/* Component Contents */}
      <Content />

      {/* Footer navbar */}
      <Footer />
    </div>
  )
}

export default Homepage
