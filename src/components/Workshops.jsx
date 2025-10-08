import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import SectionText from './common/SectionText'
import { useTranslation } from 'react-i18next'
import { CardsData } from '../utils/helper'
import Description from './common/Description'
import { Time, Dates, Location, Customer } from '../utils/icons'
import Button from './common/Button'

const Workshops = () => {
    const { t } = useTranslation();
    const workshopCards = CardsData.slice(-4);
    return (
        <div className='py-[100px]'>
            <Container>
                <SubHeading className='mb-6'>
                    {t('workshops.title')}
                </SubHeading>
                <SectionText className='max-w-[1000px] w-full mb-[60px]'>
                    {t('workshops.text')}
                </SectionText>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-[40px] gap-[24px]'>
                    {workshopCards.map((item, index) => (
                        <div
                            key={index}
                            className='border border-[#ECF1EE] rounded-[40px] xl:p-6  p-3 overflow-hidden  flex flex-col  bg-white'
                        >
                            <img
                                src={item.image}
                                alt={item.key}
                                className=' object-cover rounded-[24px] mb-[24px]'
                            />
                            <SectionText className='!font-semibold mb-[24px] green whitespace-nowrap'>{item.key}</SectionText>
                            <Description className='textgrey mb-6'>{item.data}</Description>
                            <div className='mb-6'>
                                <div className='flex items-center gap-2 mb-2'>
                                    <Dates />
                                    <Description className={'textgrey'}>
                                        {item.date}
                                    </Description>
                                </div>
                                <div className='flex items-center gap-2 mb-2 '>
                                    <Time />
                                    <Description className={'textgrey'}>
                                        {item.time}
                                    </Description>
                                </div>
                                <div className='flex items-center gap-2 mb-2'>
                                    <Location />
                                    <Description className={'textgrey'}>
                                        {item.location}
                                    </Description>
                                </div>
                                <div className='flex items-center gap-2 mb-2'>
                                    <Customer />
                                    <Description className={'textgrey'}>
                                        {item.customername}
                                    </Description>
                                </div>
                            </div>
                            <Button className='bggreen text-white !py-[16px]'>
                                {item.buttontext}
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Workshops