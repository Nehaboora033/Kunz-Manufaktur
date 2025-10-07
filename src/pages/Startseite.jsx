import React from 'react'
import Hero from '../components/Hero'
import Unsere from '../components/Unsere'
import Projekte from '../components/Projekte'
import Bereit from '../components/Bereit'

const Startseite = () => {
  return (
    <>
      <Hero />
      {/* <Unsere /> */}
      <Bereit />
      <Projekte />
    </>
  )
}

export default Startseite