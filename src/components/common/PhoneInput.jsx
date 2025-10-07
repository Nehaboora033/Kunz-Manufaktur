import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

 const PhoneInput = ({ value, onChange }) => {
    return (
        <div className="flex flex-col w-full max-w-md">
            <label className="mb-2 text-[17px] font-medium text-black">
                Telefonnummer
            </label>

            <div className="relative">
                <PhoneInput
                    country={'de'} // default Germany
                    value={value}
                    onChange={onChange}
                    enableSearch={true} // ✅ allows search inside dropdown
                    disableDropdown={false} // ✅ dropdown enabled!
                    inputProps={{
                        name: 'phone',
                        required: true,
                    }}
                    inputClass="!w-full !border !border-[#E5E5E5] !rounded-full !py-[12px] !pl-[75px] !pr-4 !text-[16px] !bg-white !shadow-sm focus:!border-black !outline-none"
                    containerClass="!w-full"
                    dropdownClass="!text-black !rounded-lg !shadow-lg"
                    buttonClass="!bg-transparent !border-none !rounded-l-full !absolute !left-4 !top-[8px]"
                />
            </div>
        </div>
    );
};

export default PhoneInput;