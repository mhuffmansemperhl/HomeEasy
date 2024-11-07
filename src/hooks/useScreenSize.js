"use client"
import { useState, useEffect } from 'react';

const useScreenSize = (customBreak = 0) => {
    const [screenSize, setScreenSize] = useState({
        isMobile: false,
        isTablet: false, 
        isLaptop: false,
        customBreakPoint: false
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                isMobile: window.innerWidth < 600,
                isTablet: window.innerWidth < 960,
                isLaptop: window.innerWidth < 1200,
                customBreakPoint: window.innerWidth < customBreak
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [customBreak]);

    return screenSize;
};

export default useScreenSize;
