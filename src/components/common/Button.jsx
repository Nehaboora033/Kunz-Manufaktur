import React from 'react'

const Button = ({ children, className, onclick }) => {
    return (
        <button onClick={onclick} className={`${className} rounded-[30px]  sm:py-[18px] py-4 sm:px-[24px] px-4  sm:font-bold font-normal leading-[100%] whitespace-nowrap`}>
            {children}
        </button>
    )
}

export default Button