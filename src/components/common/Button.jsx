import React from 'react'

const Button = ({ children, className, onclick }) => {
    return (
        <button data-aos="fade-down" onClick={onclick} className={`${className} justify-center items-center flex rounded-[30px] text-[16px]  sm:py-[16px] cursor-pointer py-4 sm:px-[24px] px-3  sm:font-bold font-normal leading-[20px]  whitespace-nowrap hover-shadow-green `}>
            {children}
        </button>
    )
}

export default Button