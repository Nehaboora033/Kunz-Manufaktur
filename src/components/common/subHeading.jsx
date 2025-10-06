import React from 'react'

const subHeading = ({ className, children }) => {
    return (
        <h2 className={`${className} font-semibold leading-[100%] green `}>
            {children}
        </h2>
    )
}

export default subHeading