import React from 'react'

const Text = ({ className, children }) => {
    return (
        <h4 className={`${className} font-normal text-[16px] leading-[20px]]`}>
            {children}
        </h4>
    )
}

export default Text