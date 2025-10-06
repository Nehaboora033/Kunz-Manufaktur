import React from 'react'
import SubHeading from './common/subHeading'
import Description from './common/Description'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Projekte_Data } from '../utils/helper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules'



const Projekte = () => {
    return (
        <div className='py-[100px]'>
            <SubHeading className={'text-center mb-6'}>
                Aktuelle Projekte
            </SubHeading>
            <Description className={'text-center black mb-[60px]'}>
                Ein Einblick in die floralen Geschichten, die wir geschaffen haben – jede persönlich, saisonal und voller Seele.
            </Description>
            <div className='ml-[160px]'>

                <Swiper
                    spaceBetween={24}
                    slidesPerView={3.6}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {Projekte_Data.map((item, index) => (
                        <SwiperSlide className='overflow-hidden' key={index}>
                            <img src={item} alt="images" className='object-cover rounded-[30px] w-[500px] h-[666px] cursor-pointer' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    )
}

export default Projekte