import React from 'react'

const Heading = ({ children, className }) => {
    return (
        <h1 className={`${className} font-bold text-[120px] leading-[120%] jakarta green max-w-[1280px] mx-auto text-center `}>
            {children}
        </h1>
    )
}

export default Heading