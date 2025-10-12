import React from 'react'
import Hero from '../components/Hero'
import Unsere from '../components/Unsere'
import Projekte from '../components/Projekte.jsx'
import Bereit from '../components/Bereit.jsx'
import Lass from '../components/Lass'
import Workshops from '../components/Workshops'

const Startseite = () => {
  return (
    <>
      <Hero />
      <Unsere />
      <Workshops />
      <Bereit />
      <Projekte />
      <Lass />
    </>
  )
}

export default Startseite