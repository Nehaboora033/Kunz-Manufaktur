import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CountryInput = ({ label, value, error, onChange, name }) => {

    return (
        <div className="w-full">
            {label && (
                <label className="block font-normal text-[16px] leading-[20px] mb-2 black">
                    {label}
                </label>
            )}
            <PhoneInput
                country={'de'} 
                value={value}
                onChange={(val) => onChange({ target: { name, value: val } })}
                inputStyle={{
                    width: '100%',
                    height: '48px',
                    fontSize: '16px',
                    paddingtop: '12px',
                    paddingbottom: '12px',
                    paddingleft: '12px',
                    paddingright: '12px',
                    borderRadius: '20px',
                    border: error ? '1px solid red' : '1px solid #FAFAFA',
                }}
                buttonStyle={{
                    border: 'none',
                    background: 'transparent',
                }}
            />

            {error && <p className="red text-sm mt-1">{error}</p>}
        </div>
    )
}

export default CountryInput