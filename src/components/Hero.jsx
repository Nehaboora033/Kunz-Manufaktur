import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import { useTranslation } from 'react-i18next'
import Button from './common/Button'
import { GreenArrow, WhiteArrow } from '../utils/icons'
import Flower from './Flower'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className='herogradient'>
      <Container className={'flex justify-center flex-col'}>
        <div className='md:pt-[100px] pt-[70px] '>
          <Heading className={'mb-[32px]'}>
            {t('heading.maintext')}
          </Heading>
          <h2 className={'text-center mb-[32px] font-normal sm:text-[24px] text-[18px] leading-[40px] black'}>
            {t('heading.text')}
          </h2>
          <div className='flex items-center justify-center gap-[17.82px] flex-wrap '>
            <Button className={'flex sm:gap-[11px] gap-2 bggreen text-white items-center  h-[56px]'}>
              {t('hero.buttontext1')}
              <WhiteArrow />
            </Button>
            <Button className={'flex sm:gap-[11px] gap-2 border-[1.27px]  h-[56px] items-center  border-[#3E7651] text-[#3E7651]'}>
              {t('hero.buttontext2')}
              <GreenArrow />
            </Button>
          </div>
        </div>
        <Flower />
      </Container>
    </div>
  )
}

export default Hero