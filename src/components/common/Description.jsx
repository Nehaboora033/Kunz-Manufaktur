import React, { Children } from 'react'

const Description = ({ children, className }) => {
    return (
        <h4 className={`${className} font-normal text-[20px] leading-[25px] `}>
            {children}
        </h4>
    )
}

export default Description