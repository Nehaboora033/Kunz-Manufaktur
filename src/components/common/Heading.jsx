import React from 'react'

const Heading = ({ children, className }) => {
    return (
        <h1 className={`${className} font-bold lg:text-[120px] md:text-[80px] text-[50px] lg:leading-[151px]  jakarta green max-w-[1280px] mx-auto text-center `}>
            {children}
        </h1>
    )
}

export default Heading