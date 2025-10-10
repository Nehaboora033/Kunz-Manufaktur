import React from 'react'
import Container from './common/Container'
import { CardsData } from '../utils/helper'
import SectionText from './common/SectionText'
import { useTranslation } from 'react-i18next'
import { Heart } from '../utils/icons'
import Description from './common/Description'
import { useNavigate } from 'react-router-dom'
import Subsheading from './common/Subsheading'
import TransparentButton from './common/TransparentButton'
import GreenButton from './common/GreenButton'

const Unsere = () => {

    const { t } = useTranslation();
    const navigate = useNavigate()

    const handleCardClick = (id) => {
        navigate(`/unsere/${id}`)
    }
    const leftCard = CardsData.find((card) => card.id === '1')
    const rightCards = CardsData.filter((card) => card.id === '2' || card.id === '3')

    return (
        <div className='sm:pb-[100px] py-[80px]'>
            <Container className={''}>
                <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[40px]">
                    {/* Left Section */}
                    <div className='max-w-[770.5px] w-full'>
                        <div className='sm:mb-[100px] mb-[60px]'>
                            <Subsheading className={'w-full mb-[24px] max-sm:text-center'}>
                                {t('services.title')}
                            </Subsheading>
                            <SectionText className={'mb-6 max-sm:text-center black'}>
                                {t('services.text')}
                            </SectionText>
                            <div className='max-sm:flex justify-center'>
                                <TransparentButton>
                                    {t('services.buttontext')}
                                </TransparentButton>
                            </div>
                        </div>

                        {leftCard && (
                            <div onClick={() => handleCardClick(leftCard.id)} className='shadow-box hover-shadow-green cursor-pointer justify-between border border-[#ECF1EE] rounded-[40px] xl:p-6  p-3 overflow-hidden  flex flex-col  bg-white'>
                                <img data-aos="fade-up"
                                    src={leftCard.image}
                                    alt={leftCard.key}
                                    className=' object-cover rounded-[24px] md:mb-[24px] mb-4'
                                />
                                <div className='flex flex-col justify-between flex-grow'>
                                    <div>
                                        <div className='flex sm:gap-4 gap-2 items-center md:mb-6 mb-4'>
                                            <Heart className={'max-sm:size-[30px]'} />
                                            <SectionText className='!font-semibold  green whitespace-nowrap'>{t(leftCard.title)}
                                            </SectionText>
                                        </div>
                                        <Description className='textgrey md:mb-6 mb-4'>{t(leftCard.data)} </Description>
                                    </div>
                                    <GreenButton>
                                        {t(leftCard.buttontext)}
                                    </GreenButton>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='max-w-[770.5px] w-full gap-y-[60px] flex flex-col'>
                        {rightCards.map((item, index) => {
                            return (
                                <div onClick={() => handleCardClick(item.id)} className='shadow-box hover-shadow-green cursor-pointer  justify-between border border-[#ECF1EE] rounded-[40px] xl:p-6  p-3 overflow-hidden  flex flex-col  bg-white' key={index}>
                                    <img data-aos="fade-up"
                                        src={item.image}
                                        alt={item.key}
                                        className=' object-cover rounded-[24px]  md:mb-[24px] mb-4 '
                                    />
                                    <div className='flex flex-col justify-between flex-grow'>
                                        <div>
                                            <div className='flex sm:gap-4 gap-2 items-center md:mb-6 mb-4'>
                                                <item.icon className="max-sm:size-[30px]" />
                                                <SectionText className='!font-semibold  green whitespace-nowrap'>  {t(item.title)}
                                                </SectionText>
                                            </div>

                                            <Description className='textgrey md:mb-6 mb-4'>  {t(item.data)}</Description>
                                        </div>
                                        <GreenButton>
                                            {t(leftCard.buttontext)}
                                        </GreenButton>
                                    </div>
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