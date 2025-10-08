import React from 'react'

const Input = ({ name, type, placeholder, value, onChange, className, label, error, children }) => {
    return (
        <div className='w-full relative'>
            {label && (
                <label htmlFor={name} className="block font-normal text-[16px] leading-[20px] text-black">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`rounded-[20px] py-3 px-4 w-full bg-white mt-[10px] placeholder-[#454544] ${error ? 'border-red-500' : 'border-[#FAFAFA]'} border ${className} ${children ? 'pl-10' : ''}`}
            />
            {children && (
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    {children}
                </div>
            )}

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}

export default Input