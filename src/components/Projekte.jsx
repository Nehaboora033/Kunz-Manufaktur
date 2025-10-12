import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Projekte_Data } from '../utils/helper'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import Container from './common/Container'
import SectionText from './common/SectionText'
import Subsheading from './common/Subsheading'

const Projekte = () => {
    const { t } = useTranslation();
    return (
        <div className="lg:py-[100px] py-[60px]">
            <Container>
                <Subsheading className="text-center mb-6 green">
                    {t('swiper.title')}
                </Subsheading>
                <SectionText className={'text-center black mb-[60px]  mx-auto'}>
                    {t('swiper.data')}
                </SectionText>
            </Container>

            <div className="xl:ml-[160px] max-lg:px-3 max-xl:px-3">
                <Swiper
                    spaceBetween={24}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1.9 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2.5 },
                        1280: { slidesPerView: 3.5 },
                    }}
                >
                    {Projekte_Data.map((item, index) => (
                        <SwiperSlide
                            className="overflow-hidden flex justify-center"
                            key={index}
                        >
                            <div className="overflow-hidden rounded-[20px]"> 
                                <img
                                    src={item}
                                    alt="images"
                                    className="object-cover w-full lg:!h-[666px] !h-[500px] cursor-pointer transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Projekte