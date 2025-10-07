import React from 'react'

const Input = ({ name, type, placeholder, value, onChange, className, label, error, children }) => {
    return (
        <div className='w-full relative'>
            {label && (
                <label htmlFor={name} className="block font-normal text-[16px] leading-[20px] black">
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ '::placeholder': { color: '#454544' } }}
                className={`rounded-[20px] border border-[#FFFFFF] py-3 px-4 w-full bg-white mt-[10px] ${error ? 'border-red-500' : 'border-[#E0E0E0]'} ${className}`}
            />
            {children && (
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    {children}
                </div>
            )}

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}

export default Input