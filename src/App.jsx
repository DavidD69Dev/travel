import { useState } from 'react'
import Hero from './components/Hero'
import Service from './components/Service'
import Destinations from './components/Destinations'
import Trip from './components/Trip'
import Compagny from './components/Compagny'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App = () => {
  
  return (
    <>
      <Hero />
      <Service />
      <Destinations />
      <Trip />
      <Compagny />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
