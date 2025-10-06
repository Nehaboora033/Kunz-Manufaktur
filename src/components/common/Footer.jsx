import React from 'react'
import { FooterLogo } from '../../utils/icons'
import Description from './Description'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Footer_contactInfo, Footer_Info, Footer_Links } from '../../utils/helper'

const Footer = () => {
  const currentYear = new Date();
  const { t } = useTranslation()
  return (
    <div className='bggreen py-[40px]'>
      <div className='text-white max-w-[1865px] mx-auto px-3'>
        <div className='flex gap-[40px] '>
          <div className='max-w-[500px] w-full'>
            <div className='flex gap-4 items-center mb-8'>
              <FooterLogo />
              <h4 className='font-semibold text-[22px] leading-[120%] max-w-[122px] '>
                Kunz
                Manufaktur
              </h4>
            </div>
            <Description className={''}>
              {t('footer.text')}
            </Description>
          </div>
          <div className='max-w-[406.67px] w-full'>
            <h4 className='font-bold leading-[100%] mb-[32px]'>
              Dienstleistungen
            </h4>
            {Footer_Links.map((item, index) => (
              <div key={index} className='mb-1'>
                <Link to={item.link} className=''>
                  <Description>
                    {item.text}
                  </Description>
                </Link>
              </div>
            ))}
          </div>

          <div className='max-w-[406.7px] w-full'>
            <h4 className='font-bold leading-[100%] mb-[32px]'>
              Kontakte
            </h4>
            {Footer_contactInfo.map((item, index) => (
              <Link className='mb-1' key={index} to={item.href}>
                <Description>
                  {item.text}
                </Description>
              </Link>
            ))}
          </div>
          <div className='max-w-[406.7px] w-full'>
            <h4 className='font-bold leading-[100%] mb-[32px]'>
              Öffnungszeiten
            </h4>
            {Footer_Info.map((item, index) => (
              <div className='mb-1' key={index} >
                <Description>
                  {item.text}
                </Description>
              </div>
            ))}
          </div>
        </div>
        {/* copyright part  */}
        <div className='mt-6 flex justify-between'>
          <Description>
            © {currentYear.getFullYear()}Kunz Manufaktur. Alle Rechte vorbehalten.
          </Description>
          <div className='flex items-center gap-[32px]'>
            <Link to="" className='underline underline-offset-3'>
              Datenschutz
            </Link>
            <Link to="" className='underline underline-offset-3'>
              Impressum
            </Link>
            <Link to="" className='underline underline-offset-3'>
              AGB
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer