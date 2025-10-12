import React from 'react'
import Cardsection from '../components/Cardsection'
import Bereit from '../components/Bereit.jsx'
import UnsereFlorean from '../components/UnsereFlorean'
import { useParams } from 'react-router-dom'
import { CardsData } from '../utils/helper'

const Unsere = () => {
  const { id } = useParams()
  const selectedId = id || "1"
  const selectedCard = CardsData.find((card) => card.id === selectedId)

  return (
    <>
      <UnsereFlorean card={selectedCard} />
      <Cardsection />
      <Bereit />

    </>
  )
}

export default Unsere