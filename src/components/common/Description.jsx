import React, { Children } from 'react'

const Description = ({ children, className }) => {
    return (
        <h4 className={`${className} font-normal text-[16px] leading-[100%]`}>
            {children}
        </h4>
    )
}

export default Description