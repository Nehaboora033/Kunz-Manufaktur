import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import { useTranslation } from 'react-i18next'
import Button from './common/Button'
import { GreenArrow, WhiteArrow } from '../utils/icons'
import flower from '../assets/webp/flowerhero.webp'
import Title from './common/Title'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className='herogradient'>
      <Container className={'flex justify-center flex-col  '}>
        <div className='md:py-[100px] py-[70px]'>
          <Heading className={'mb-[32px]'}>
            {t('heading.maintext')}
          </Heading>
          <h2 className={'text-center mb-[32px] font-normal sm:text-[24px] text-[18px] leading-[40px] black'}>
            {t('heading.text')}
          </h2>
          <div className='flex items-center justify-center gap-[17.82px] flex-wrap '>
            <Button className={'flex gap-[11px] bggreen text-white items-center '}>
              {t('hero.buttontext1')}
              <WhiteArrow />
            </Button>
            <Button className={'flex gap-[11px] border-[1.27px] !py-[19px] items-center border-[#3E7651]  text-[#3E7651] '}>
              {t('hero.buttontext2')}
              <GreenArrow />
            </Button>
          </div>
        </div>
        <img src={flower} alt="flower" className='object-cover size-[661px] block mx-auto ' />
      </Container>
    </div>
  )
}

export default Hero