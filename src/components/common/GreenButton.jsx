import React from 'react'
import { WhiteArrow } from '../../utils/icons'

const GreenButton = ({ children, className, onclick, showArrow = true }) => {
    return (
        <button data-aos="fade-down" onClick={onclick} className={`${className} gap-2 justify-center items-center flex rounded-[30px] text-[16px]  sm:py-[16px] cursor-pointer py-4 sm:px-[24px] px-3  sm:font-bold font-normal leading-[20px]  whitespace-nowrap h-[56px] bggreen white hover:text-[#3E7651] hover-transparent border border-[#3E7651] transition-all duration-500 ease-in-out`}>
            {children}
            {showArrow && <WhiteArrow />}
        </button>
    )
}

export default GreenButton