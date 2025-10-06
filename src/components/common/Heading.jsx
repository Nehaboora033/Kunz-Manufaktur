import React from 'react'

const Heading = ({ children, className }) => {
    return (
        <h1 className={`${className} font-bold text-[120px] leading-[100%] jakarta`}>
            {children}
        </h1>
    )
}

export default Heading