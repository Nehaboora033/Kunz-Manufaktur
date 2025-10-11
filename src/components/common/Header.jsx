import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LogoIcon } from '../../utils/icons'
import { Navlinks } from '../../utils/helper'
import Hamburger from 'hamburger-react'
import GreenButton from './GreenButton'


const Header = () => {
    const [state, setIsOpen] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (state === 'show') {
            document.body.style.overflow = 'hidden'; // stop scrolling
        } else {
            document.body.style.overflow = 'auto'; // allow scrolling again
        }

        // optional cleanup (in case the component unmounts)
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [state]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang)
    }

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 z-20 w-full  ${scrolled ? 'shadow-lg bg-white' : ''}`}>
            <div className="w-full max-w-[1840px] sm:px-3 px-2 mx-auto flex items-center justify-between py-6">
                <Link data-aos="fade-down" to="/" className="flex items-center xl:gap-4 gap-2">
                    <LogoIcon className={'max-sm:size-[30px]'} />
                    <div className="green max-w-[122px] jakarta font-semibold xl:text-[22px] text-[20px] xl:leading-[120%] leading-[100%] whitespace-pre-line sm:block hidden">
                        {t('header.logoText')}
                    </div>
                </Link>

                <nav className={`flex items-center xl:gap-6 gap-5
                    max-lg:flex-col max-lg:items-center z-[10] max-lg:justify-center transition-[right] max-lg:fixed max-lg:top-0 duration-800 ease-in-out max-sm:w-full max-lg:w-[75%] max-lg:h-full max-lg:bg-white ${state === 'show' ? 'right-0 ' :
                        'max-lg:right-[-100%]'}`}>
                    {Navlinks.map((item, index) => (
                        <NavLink
                            to={item.link}
                            key={index}
                            className={({ isActive }) =>
                                `text-base  leading-[20px] transition-colors duration-150 whitespace-nowrap ${isActive ? 'green font-bold' : 'linkgrey font-normal'}`
                            } onClick={() => setIsOpen(null)}
                        >
                            {t(item.key)}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center sm:gap-6 gap-3">
                    <div className="flex items-center sm:gap-6 gap-3">
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
                    <div className='flex items-center gap-1'>
                        <GreenButton showArrow={false} className={'max-sm:py-3 sm:w-[182px] !h-[52px] max-sm:px-2  '}>
                            {t('header.orderButton')}
                        </GreenButton>
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