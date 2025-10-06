import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LogoIcon } from '../../utils/icons'
import Button from './Button'
import { Navlinks } from '../../utils/helper'
import Hamburger from 'hamburger-react'


const Header = () => {
    const [state, setIsOpen] = useState(null);
    const { t, i18n } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang)
    }

    return (
        <div className="">
            <div className="w-full max-w-[1840px] sm:px-3 px-2 mx-auto flex items-center justify-between py-6">
                <Link to="/" className="flex items-center gap-4">
                    <LogoIcon />
                    <div className="green max-w-[122px] jakarta font-semibold text-[22px] leading-[120%] whitespace-pre-line sm:block hidden">
                        {t('header.logoText')}
                    </div>
                </Link>

                <nav className={`flex items-center gap-6
                    max-lg:flex-col max-lg:items-center z-[10] max-lg:justify-center transition-[right] max-lg:fixed max-lg:top-0 duration-800 ease-in-out max-sm:w-full max-lg:w-[75%] max-lg:h-full max-lg:bg-white ${state === 'show' ? 'right-0' :
                        'max-lg:right-[-100%]'}`}>
                    {Navlinks.map((item, index) => (
                        <NavLink
                            to={item.link}
                            key={index}
                            className={({ isActive }) =>
                                `text-base font-normal transition-colors duration-150 whitespace-nowrap ${isActive ? 'green' : 'linkgrey'}`
                            } onClick={() => setIsOpen(null)}
                        >
                            {t(item.key)}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center sm:gap-6 gap-1">
                    <div className="flex items-center sm:gap-6 gap-1">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`sm:font-bold font-medium leading-[100%] cursor-pointer ${i18n.language === 'en' ? 'green' : 'linkgrey'}`}
                        >
                            {t('language.en')}
                        </button>
                        <button
                            onClick={() => changeLanguage('de')}
                            className={`sm:font-bold font-medium leading-[100%] cursor-pointer ${i18n.language === 'de' ? 'green' : 'linkgrey'}`}
                        >
                            {t('language.de')}
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <Button className="sm:!py-[16px]  sm:w-[182px] sm:h-[52px] max-sm:px-3  ">
                            {t('header.orderButton')}
                        </Button>
                        <button
                            aria-label="Toggle navigation menu"
                            className='z-[11] lg:hidden'
                            onClick={() => setIsOpen(state === 'show' ? null : 'show')}>
                            <Hamburger
                                toggled={state == 'show'}
                                color="#3E7651"
                                 size={32}  
                                toggle={() => setIsOpen(state === 'show' ? null : 'show')} />
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header