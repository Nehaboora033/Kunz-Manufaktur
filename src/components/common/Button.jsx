import React from 'react'

const Button = ({ children, className, onclick }) => {
    return (
        <button onClick={onclick} className={`${className} rounded-[30px] bggreen sm:py-[18px] py-4 sm:px-[24px] px-4 text-white border-none sm:font-bold font-normal leading-[100%]`}>
            {children}
        </button>
    )
}

export default Button