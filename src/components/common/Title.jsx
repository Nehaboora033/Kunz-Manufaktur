import React from 'react'

const Title = ({ className, children }) => {
    return (
        <h4 className={`${className} font-normal leading-[30px] text-[24px] `}>
            {children}

        </h4>
    )
}

export default Title