import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import { useTranslation } from 'react-i18next'
import Flower from './Flower'
import GreenButton from './common/GreenButton'
import TransparentButton from './common/TransparentButton'

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
            <GreenButton>
              {t('hero.buttontext1')}
            </GreenButton>
            <TransparentButton>
              {t('hero.buttontext2')}
            </TransparentButton>
          </div>
        </div>
        <Flower />
      </Container>
    </div>
  )
}

export default Hero