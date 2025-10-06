import React from 'react'

const SubHeading = ({ className, children }) => {
    return (
        <h2 className={`${className} font-semibold leading-[100%] green text-[24px] `}>
            {children}
        </h2>
    )
}

export default SubHeading