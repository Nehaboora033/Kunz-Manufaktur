import React from 'react'
import flower from '../assets/webp/flowerhero.webp'

const Flower = () => {
    return (
        <>
            <div className="flex justify-center items-center w-full h-fit absolute -translate-y-[50%] px-3">
                <img
                    src={flower}
                    alt="flower"
                    className="object-cover sm:size-[661px] min-[450px]:size-[500px] size-[340px]"
                />
            </div>
        </>

    )
}

export default Flower


