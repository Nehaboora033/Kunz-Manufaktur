import React from 'react'
import Hero from '../components/Hero'
import Unsere from '../components/Unsere'
import Projekte from '../components/Projekte'
import Lass from '../components/Lass'
import Workshops from '../components/Workshops'
import Flower from '../components/Flower'

const Startseite = () => {
  return (
    <>
      <Hero />
      {/* <Flower /> */}
      <Unsere />
      <Workshops />
     
      <Lass />
      <Projekte />
    </>
  )
}

export default Startseite