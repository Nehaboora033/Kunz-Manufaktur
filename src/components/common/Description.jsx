import React, { Children } from 'react'

const Description = ({ children, className }) => {
    return (
        <h4 data-aos="zoom-in" className={`${className} font-normal sm:text-[20px] text-[16px] leading-[25px] `}>
            {children}
        </h4>
    )
}

export default Description