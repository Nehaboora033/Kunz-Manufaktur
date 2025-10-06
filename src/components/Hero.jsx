import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import { useTranslation } from 'react-i18next'
import Description from './common/Description'
import Button from './common/Button'
import { GreenArrow, WhiteArrow } from '../utils/icons'
import flower from '../assets/webp/flowerhero.webp'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className='herogradient'>
      <Container className={'flex justify-center flex-col  '}>
        <div className='py-[80px]'>
          <Heading className={'mb-[32px] '}>
            {t('heading.maintext')}
          </Heading>
          <Description className={'text-[24px] text-center black mb-[32px]'}>
            {t('heading.text')}
          </Description>
          <div className='flex items-center justify-center gap-[17.82px] '>
            <Button className={'flex gap-[11px] bggreen text-white  '}>
               {t('hero.buttontext1')}
              <WhiteArrow />
            </Button>
            <Button className={'flex gap-[11px] border-[1.27px] !py-[19px] border-[#3E7651]  text-[#3E7651] '}>
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