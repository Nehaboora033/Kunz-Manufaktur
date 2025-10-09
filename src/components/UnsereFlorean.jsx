import React from 'react'
import { useTranslation } from 'react-i18next'
import SubHeading from './common/SubHeading'
import Container from './common/Container'
import SectionText from './common/SectionText'
import Button from './common/Button'
import { WhiteArrow } from '../utils/icons'
import { Unorder_List } from '../utils/helper'


const Floralen = ({ card }) => {
    const { t } = useTranslation()

    if (!card) {
        return (
            <div className="pt-[100px] bg-[#FAFAFA]">
                <Container>
                    <p className="text-center text-gray-500">
                        Keine Kartendaten gefunden.
                    </p>
                </Container>
            </div>
        )
    }

    const Icon = card.icon

    return (
        <div className="pt-[100px] bg-[#FAFAFA]">
            <Container>
                <div className="mx-auto max-w-[1280px] mb-[40px]">
                    <SubHeading className={'mb-[24px] text-center'}>
                        Unsere Floralen<br />Dienstleistungen
                    </SubHeading>
                    <SectionText className={'text-center'}>
                        Entdecken Sie unser Angebot an personalisierten Blumen-Erlebnissen, von Beratungen bis hin zu kreativen Workshops.
                    </SectionText>
                </div>

                {/* dynamic card render */}
                <div className="border border-[#ECF1EE] rounded-[40px] p-3 md:p-6 flex gap-[24px] max-xl:flex-col shadow-box">
                    <img data-aos="fade-up"
                        src={card.image}
                        alt={t(card.title)}
                        className="object-cover sm:w-[600px] sm:h-[546px]    rounded-[24px] block max-xl:mx-auto"
                    />
                    <div>
                        <div data-aos="fade-up" className="flex items-center sm:gap-[16px] gap-2 mb-4">
                            {Icon && <Icon className="max-sm:size-[35px]"/>}
                            <h2 className="font-bold sm:text-[36px] text-[25px] leading-[150%] green ">
                                {t(card.title)}
                            </h2>
                        </div>
                        {/* <h3 className="font-medium text-[24px] leading-[150%] textgrey mb-[24px]">
                            {t(card.data)}
                        </h3> */}

                        <h3 className='font-medium leading-[150%] sm:text-[24px] text-[18px] textgrey'>
                            {t('unorderlist.toptext')}
                        </h3>
                        <div className='sm:py-[24px] py-4'>
                            <ul className='list-disc pl-6' >
                                {Unorder_List.map((item, index) => {
                                    return (
                                        <li className='font-medium leading-[150%] sm:text-[24px] texet-[18px] textgrey' key={index} >
                                            {t(item.name)}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <h3 className='font-medium leading-[150%] sm:text-[24px] text-[18px] textgrey'>
                            {t('unorderlist.bottomtext')}
                        </h3>
                        <Button className="bggreen flex items-center gap-2 text-white justify-center mt-[24px] max-[401px]:w-full">
                            {t(card.buttontext)}
                            <WhiteArrow />
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Floralen




