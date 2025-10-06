import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`${className} max-w-[1625px] mx-auto px-3 w-full`}>
            {children}
        </div>
    )
}

export default Container