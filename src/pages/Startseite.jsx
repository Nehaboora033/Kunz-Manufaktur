import React from 'react'
import Hero from '../components/Hero'
import Unsere from '../components/Unsere'
import Projekte from '../components/Projekte'
import Bereit from '../components/Bereit'
import Lass from '../components/Lass'

const Startseite = () => {
  return (
    <>
      <Hero />
      {/* <Unsere /> */}
      <Bereit />
      <Lass />
      <Projekte />
    </>
  )
}

export default Startseite