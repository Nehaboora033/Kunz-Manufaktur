import React from 'react'

const Heading = ({ children, className }) => {
    return (
        <h1 data-aos="zoom-in-down" className={`${className} font-bold lg:text-[120px] md:text-[80px] text-[50px] xl:leading-[151px] md:leading-[100px] lg:leading-[130px] leading-[60px] jakarta green max-w-[1280px] mx-auto text-center`}>
            {children}
        </h1>
    )
}

export default Heading