import React from 'react'
import { FooterLogo } from '../../utils/icons'
import Description from './Description'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Footer_contactInfo, Footer_DataLink, Footer_Info, Footer_Links } from '../../utils/helper'
import Text from './Text'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='bggreen py-[40px] mt-[100px] '>
      <div className='text-white max-w-[1865px] mx-auto px-3'>
        <div className='flex flex-wrap gap-y-[40px]  '>
          <div className='max-w-[500px] w-full'>
            <div className='flex gap-4 items-center mb-8'>
              <FooterLogo />
              <h3 className='font-semibold text-[22px] leading-[120%] max-w-[122px] '>
                Kunz
                Manufaktur
              </h3>
            </div>
            <Text>
              {t('footer.text')}
            </Text>
          </div>
          <div className='flex-1 flex gap-[40px] '>
            <div>
              
            </div>
            {/* services */}
            <div className='w-1/3'>
              <Text className='!font-bold mb-[32px]'>
                {t('linkservices.title')}
              </Text>
              {Footer_Links.map((item, index) => (
                <div key={index} className='mb-1'>
                  <Link to={item.link} >
                    <Text className={'whitespace-nowrap'}>
                      {t(item.key)}
                    </Text>
                  </Link>
                </div>
              ))}
            </div>
            {/* contact */}
            <div className='w-1/3'>
              <Text className='!font-bold  mb-[32px]'>
                {t('linkcontact.title')}
              </Text>
              {Footer_contactInfo.map((item, index) => (
                <Link className='mb-1' key={index} to={item.href}>
                  <Text>
                    {t(item.key)}
                  </Text>
                </Link>
              ))}
            </div>
            {/* opening time */}
            <div className='w-1/3'>
              <Text className='!font-bold  mb-[32px]'>
                {t('linkopening.title')}
              </Text>
              {Footer_Info.map((item, index) => (
                <div className='mb-1' key={index} >
                  <Text className={'whitespace-nowrap'}>
                    {t(item.key)}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* copyright part  */}
        <div className='mt-6 flex justify-between'>
          <Text>
            {t('footer.copyright')}
          </Text>
          <div className='flex items-center gap-[32px]'>
            {Footer_DataLink.map((item, index) => (
              <Link key={index} className='underline underline-offset-3 font-normal text-[16px] leading-[20px]'>
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div >
  )
}

export default Footer