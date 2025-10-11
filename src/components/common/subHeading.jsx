import React from 'react'

const SubHeading = ({ className, children }) => {
    return (
        <h2 data-aos="fade-up" className={`${className} font-semibold lg:text-[48px] text-[34px] green lg:leading-[72px]  poppins `}>
            {children}
        </h2>
    )
}

export default SubHeading