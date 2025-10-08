import React from 'react'

const Button = ({ children, className, onclick }) => {
    return (
        <button onClick={onclick} className={`${className} justify-center items-center flex rounded-[30px] text-[16px] leading-[20px]  sm:py-[18px] cursor-pointer py-4 sm:px-[24px] px-3  sm:font-bold font-normal  whitespace-nowrap`}>
            {children}
        </button>
    )
}

export default Button