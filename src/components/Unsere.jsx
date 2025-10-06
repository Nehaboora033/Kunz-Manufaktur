import React from 'react'
import Container from './common/Container'
import { CardsData } from '../utils/helper'
import Description from './common/Description'
import Title from './common/Title'

const Unsere = () => {
    const leftCard = CardsData.find((card) => card.id === '1')
    const rightCards = CardsData.filter((card) => card.id === '2' || card.id === '3')

    return (
        <div>
            <Container>
                <div className="flex justify-between">
                    {/* Left Section */}
                    <div className="w-[770.5px]">
                        {leftCard && (
                            <div className="p-6 shadow-card border border-[#ECF1EE] rounded-[40px]">
                                {/* Render icon */}
                                {/* <div className="mb-4">{leftCard.icon && <leftCard.icon />}</div> */}

                                {/* Title */}
                                {/* <h2 className="text-2xl font-semibold green mb-2">{leftCard.key}</h2> */}

                                {/* Description */}
                                {/* <p className="textgrey mb-4">{leftCard.data}</p> */}

                                {/* Button */}
                                {/* <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                                    {leftCard.buttontext}
                                </button> */}

                                <img src={leftCard.image} alt="image " className='object-cover  rounded-[24px] mb-6' />
                                <div className='flex items-center gap-4 mb-4'>
                                    <div className="size-[48px]">{leftCard.icon && <leftCard.icon />}</div>
                                    <Title className={'green'}>
                                        {leftCard.key}
                                    </Title>
                                </div>

                                <Description className={'mb-6'}>
                                    {leftCard.data}
                                </Description>
                            </div>
                        )}
                    </div>

                    {/* Right Section */}
                    <div className="w-[770.5px] flex flex-col gap-8">
                        {rightCards.map((card) => {
                            const Icon = card.icon
                            return (
                                <div key={card.id} className="p-6 rounded-2xl shadow-card bg-white">
                                    {/* Icon */}
                                    <div className="mb-4">{Icon && <Icon />}</div>

                                    {/* Title */}
                                    <h2 className="text-2xl font-semibold green mb-2">{card.key}</h2>

                                    {/* Description */}
                                    <p className="textgrey mb-4">{card.data}</p>

                                    {/* Button */}
                                    <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                                        {card.buttontext}
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                 
                </div>
            </Container>
        </div>
    )
}

export default Unsere