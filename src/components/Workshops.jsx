import React from 'react'
import Container from './common/Container'
import SectionText from './common/SectionText'
import { useTranslation } from 'react-i18next'
import { CardsData } from '../utils/helper'
import Description from './common/Description'
import { Time, Dates, Location, Customer} from '../utils/icons'
import { useNavigate } from 'react-router-dom'
import Subsheading from './common/Subsheading'
import GreenButton from './common/GreenButton'
import TransparentButton from './common/TransparentButton'

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
        <div className='lg:py-[100px] py-[60px]'>
            <Container>
                <Subsheading className='md:mb-6 mb-4 max-md:text-center green' >
                    {t('workshops.title')}
                </Subsheading>
                <SectionText className='max-w-[1000px] w-full md:mb-[60px] mb-[35px] max-md:text-center black'>
                    {t('workshops.text')}
                </SectionText>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-x-[40px] xl:gap-y-[60px] gap-[24px] cursor-pointer'>
                    {workshopCards.map((item, index) => (
                        <div
                            key={index} onClick={() => handleCardClick(item.id)}
                            className='shadow-box hover-shadow-green border border-[#ECF1EE] justify-between rounded-[40px] xl:p-6  p-3 overflow-hidden  flex flex-col  bg-white transition-all duration-250 ease-in-out'>

                            <img data-aos="fade-up"
                                src={item.image}
                                alt={item.key}
                                className=' object-cover rounded-[24px] md:mb-[24px] mb-4'
                            />
                            <div className='flex flex-col justify-between flex-grow'>
                                <div>
                                    <SectionText className='!font-semibold md:mb-[24px] mb-4 green whitespace-nowrap'>{t(item.title)} </SectionText>
                                    <Description className='textgrey md:mb-6 mb-4'>{t(item.data)}</Description>
                                    <div className='md:mb-4 mb-2'>
                                        <div className='flex items-center gap-2 mb-2 2xl:h-[42px]'>
                                            <Dates className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.date)}
                                            </Description>
                                        </div>
                                        <div className='flex items-center gap-2 mb-2 2xl:h-[42px] '>
                                            <Time className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.time)}
                                            </Description>
                                        </div>
                                        <div className='flex items-center gap-2 mb-2 2xl:h-[42px]'>
                                            <Location className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.location)}
                                            </Description>
                                        </div>
                                        <div className='flex items-center gap-2 mb-2 2xl:h-[42px]'>
                                            <Customer className='max-sm:size-[25px]' />
                                            <Description className={'textgrey'}>
                                                {t(item.customername)}
                                            </Description>
                                        </div>
                                    </div>
                                </div>
                                <GreenButton>
                                    {t(item.buttontext)}
                                </GreenButton>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <TransparentButton className={'sm:mt-[60px] mt-[20px]'}>
                        {t('workshops.button')}
                    </TransparentButton>
                </div>
            </Container>
        </div>
    )
}

export default Workshops