import React from 'react'
import flower from '../assets/webp/flowerhero.webp'

const Flower = () => {
    return (
        <div className=''>
            <img src={flower} alt="flower" className='object-cover size-[661px] block mx-auto  ' />
        </div>
    )
}

export default Flower


    // < div className = '' >
    //     <img src={flower} alt="flower" className='object-cover size-[661px] block mx-auto xl:translate-y-[30%] translate-custom  lg:translate-y-[10%] md:translate-y-[30%] min-[400px]:translate-y-[50%] translate-y-[30%] ' />
    //     </div >