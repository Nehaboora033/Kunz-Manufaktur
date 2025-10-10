import React from 'react'
import Container from './common/Container'
import { CardsData } from '../utils/helper'
import { useTranslation } from 'react-i18next'
import SectionText from './common/SectionText'
import Description from './common/Description'
import { WhiteArrow } from '../utils/icons'
import Button from './common/Button'
import { useNavigate } from 'react-router-dom'

const Cardsection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const handleCardClick = (id) => {
        navigate(`/unsere/${id}`)
    };
    const TopCards = CardsData.filter((card) => card.id === '2' || card.id === '3');
    const DownCards = CardsData.filter((card) => card.id === '8' || card.id === '9');
    return (
        <div className='sm:pb-[100px] pb-[80px] pt-[40px] bg-[#FAFAFA]'>
            <Container>
                {/* Top grid */}
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[24px]'>
                    {TopCards.map((item, index) => {
                        return (
                            <div onClick={() => handleCardClick(item.id)} className='shadow-box hover-shadow-green justify-between border cursor-pointer border-[#ECF1EE] rounded-[40px] xl:p-6  p-3 overflow-hidden  flex flex-col  bg-white' key={index}>
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
                                    <Button className={'bggreen h-[56px]  flex items-center gap-2 text-white justify-center'}>
                                        {t(item.buttontext)}
                                        <WhiteArrow />
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/*  Down grid */}
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[24px] mt-[40px]'>
                    {DownCards.map((item) => (
                        <div
                            key={item.id} onClick={() => handleCardClick(item.id)}
                            className='shadow-box cursor-pointer hover-shadow-green border border-[#ECF1EE] justify-between rounded-[40px] xl:p-6 p-3 overflow-hidden flex flex-col bg-white'
                        >
                            <img data-aos="fade-up"
                                src={item.image}
                                alt={item.key}
                                className='object-cover rounded-[24px] md:mb-[24px] mb-4'
                            />
                            <div className='flex flex-col justify-between flex-grow'>
                                <div>
                                    <div className='flex sm:gap-4 gap-2 items-center md:mb-6 mb-4'>
                                        <item.icon className={'max-sm:size-[30px]'} />
                                        <SectionText className='!font-semibold green '>
                                            {t(item.title)}
                                        </SectionText>
                                    </div>
                                    <Description className='textgrey md:mb-6 mb-4'>
                                        {t(item.data)}
                                    </Description>
                                </div>
                                <Button className='bggreen h-[56px]  flex items-center gap-2 text-white justify-center'>
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

export default Cardsection