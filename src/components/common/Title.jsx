import React from 'react'

const Title = ({ className, children }) => {
    return (
        <h2 className={`${className} font-bold leading-[100%]`}>
            {children}

        </h2>
    )
}

export default Title