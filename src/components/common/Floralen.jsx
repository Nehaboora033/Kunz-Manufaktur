import React from 'react'
import Container from './Container'
import SubHeading from './SubHeading'
import SectionText from './SectionText'
import { Heart, WhiteArrow } from '../../utils/icons'
import Button from './Button'
import image from '../../assets/webp/Image1.webp'

const Floralen = () => {
    return (
        <div className='pt-[100px] bg-[#FAFAFA] '>
            <Container>
                <div className='mx-auto max-w-[1280px]'>
                    <SubHeading className={'mb-[24px] text-center '}>
                        Unsere Floralen<br></br>
                        Dienstleistungen
                    </SubHeading>
                    <SectionText className={'text-center '}>
                        Entdecken Sie unser Angebot an personalisierten Blumen-Erlebnissen, von Beratungen bis hin zu kreativen Workshops.
                    </SectionText>
                </div>
                {/* card redder */}

                <div className='border border-[#ECF1EE] rounded-[40px] p-6 flex gap-[24px] max-xl:flex-col '>
                    <img src={image} alt="image" className='object-cover w-[600px] h-[546px] rounded-[24px] block max-xl:mx-auto' />
                    <div className=''>
                        <div className='flex item-center gap-[16px] mb-4'>
                            <Heart />
                            <h2 className='font-bold text-[36px] leading-[150%] green'> Persönliche Beratung</h2>
                        </div>
                        <h3 className='font-medium text-[24px] leading-[150%] textgrey mb-[24px]'>  Jeder Raum hat seinen eigenen Charakter, und jeder Kunde hat individuelle Vorlieben. Unsere persönlichen Beratungsgespräche stellen sicher, dass Ihre Blumenarrangements perfekt zu Ihrer Umgebung und Ihrem Lebensstil passen.</h3>
                        <ul className='font-medium text-[24px] leading-[150%] textgrey mb-[24px]'>
                            <li> Hausbesuche</li>
                            <li>
                                1-2-stündige Sitzungen
                            </li>
                            <li>
                                Maßgeschneiderte Designs
                            </li>
                            <li>
                                Stilberatung
                            </li>
                        </ul>
                        <h3 className='font-medium text-[24px] leading-[150%] textgrey'>
                            Wir besprechen Ihre Vorstellungen, begutachten Ihren Raum und erstellen einen individuellen Plan, der Ihre Blumenträume wahr werden lässt.
                        </h3>
                        <Button className={'bggreen flex items-center gap-2 text-white justify-center mt-[24px]'}>
                            Beratung vereinbaren
                            <WhiteArrow />
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Floralen