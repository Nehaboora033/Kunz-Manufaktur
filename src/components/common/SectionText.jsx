import React from 'react'

const SectionText = ({ className, children }) => {
    return (
        <h4 className={`${className} font-normal leading-[30px] text-[24px] `}>
            {children}

        </h4>
    )
}

export default SectionText