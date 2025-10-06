import React from 'react'

const Title = ({ className, children }) => {
    return (
        <h4 className={`${className} font-bold leading-[100%] text-[16px] `}>
            {children}

        </h4>
    )
}

export default Title