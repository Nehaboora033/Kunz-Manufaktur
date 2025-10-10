import React from 'react'
import { GreenArrow } from '../../utils/icons'

const TransparentButton = ({ children, className, onclick }) => {
    return (
        <button data-aos="fade-down" onClick={onclick} className={`${className} justify-center items-center flex rounded-[30px] text-[16px]  sm:py-[16px] cursor-pointer py-4 sm:px-[24px] px-3  sm:font-bold font-normal leading-[20px]  whitespace-nowrap h-[56px]  border border-[#3E7651] green gap-2 hover-bggreen hover-textwhite transition-all duration-500 ease-in-out`}>
            {children}
            <GreenArrow />
        </button>
    )
}

export default TransparentButton