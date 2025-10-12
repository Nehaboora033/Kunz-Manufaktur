import React from 'react'
import Hero from '../components/Hero'
import Unsere from '../components/Unsere'
import Projekte from '../components/Projekte.jsx'
import Bereit from '../components/Bereit.jsx'
import Lass from '../components/Lass'
import Workshops from '../components/Workshops'
import Flower from '../components/Flower'

const Startseite = () => {
  return (
    <>
      <Hero />
      <Flower />
      <Unsere />
      <Workshops />
      <Bereit />
      <Projekte />
      <Lass />
    </>
  )
}

export default Startseite