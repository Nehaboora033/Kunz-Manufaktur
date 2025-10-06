import React, { useEffect, useState } from 'react'
import { BackToTopArrow } from '../../utils/icons';
import Button from './Button';

const BackToTop = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (!show) return null;
    return (
        <div>
            <Button
                onClick={handleBackToTop}
                aria-label="Back to top"
                className="!fixed flex justify-center items-center rotate-[-90deg] bottom-8  right-8 size-[50px] text-xl z-[9] bg-[#325E41] text-white rounded-full shadow-lg cursor-pointer transition-all hover:scale-110 duration-300 ease-linear">
                <BackToTopArrow />
            </Button>
        </div>
    )
}

export default BackToTop