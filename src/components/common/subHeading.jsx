import React from 'react'

const SubHeading = ({ className, children }) => {
    return (
        <h2 className={`${className} font-semibold sm:text-[48px] text-[34px] green md:leading-[72px] poppins`}>
            {children}
        </h2>
    )
}

export default SubHeading