import React, { Children } from 'react'

const Description = ({ children, className }) => {
    return (
        <p className={`${className} font-normal text-[16px] leading-[100%]`}>
            {children}
        </p>
    )
}

export default Description