import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import SectionText from './common/SectionText'
import { useTranslation } from 'react-i18next'
import { CardsData } from '../utils/helper'
import Description from './common/Description'
import { Time, Dates, Location, Customer, WhiteArrow } from '../utils/icons'
import Button from './common/Button'
import {  useNavigate } from 'react-router-dom'

const Workshops = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const handleCardClick = (id) => {
        navigate(`/unsere/${id}`)
    }
    const workshopCards = CardsData.filter(card =>
        ['4', '5', '6', '7'].includes(card.id)
    );
    return (
        <div className='py-[100px]'>
            <Container>
                <SubHeading className='md:mb-6 mb-4 max-md:text-center' >
                    {t('workshops.title')}
                </SubHeading>
                <SectionText className='max-w-[1000px] w-full md:mb-[60px] mb-[35px] max-md:text-center'>
                    {t('workshops.text')}
                </SectionText>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-[40px] gap-[24px]'>
                    {workshopCards.map((item, index) => (
                        <div
                            key={index} onClick={() => handleCardClick(item.id)}
                            className='shadow-box border border-[#ECF1EE] justify-between rounded-[40px] xl:p-6  p-3 overflow-hidden  flex flex-col  bg-white'>

                            <img data-aos="fade-up"
                                src={item.image}
                                alt={item.key}
                                className=' object-cover rounded-[24px] md:mb-[24px] mb-4'
                            />
                            <div className='flex flex-col justify-between flex-grow'>
                                <div>
                                    <SectionText className='!font-semibold md:mb-[24px] mb-4 green whitespace-nowrap'>{t(item.title)} </SectionText>
                                    <Description className='textgrey md:mb-6 mb-4'>{t(item.data)}</Description>
                                    <div className='md:mb-6 mb-4'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Dates className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.date)}
                                            </Description>
                                        </div>
                                        <div className='flex items-center gap-2 mb-2 '>
                                            <Time className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.time)}
                                            </Description>
                                        </div>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Location className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.location)}
                                            </Description>
                                        </div>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Customer className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.customername)}
                                            </Description>
                                        </div>
                                    </div>
                                </div>
                                <Button className='bggreen text-white flex gap-2'>
                                    {t(item.buttontext)}
                                    <WhiteArrow />
                                </Button>
                            </div>

                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Workshops