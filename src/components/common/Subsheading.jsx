import React from 'react'

const Subsheading = ({className,children}) => {
    return (
        <h2 data-aos="fade-up" className={`${className} font-semibold lg:text-[48px] sm:text-[42px] text-[34px]  lg:leading-[72px] poppins`}>
            {children}
        </h2>
    )
}

export default Subsheading