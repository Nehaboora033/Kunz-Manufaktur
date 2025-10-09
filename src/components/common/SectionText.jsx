import React from 'react'

const SectionText = ({ className, children }) => {
    return (
        <h3 data-aos="fade-right" className={`${className} font-normal leading-[30px] sm:text-[24px] text-[20px]`}>
            {children}
        </h3>
    )
}

export default SectionText