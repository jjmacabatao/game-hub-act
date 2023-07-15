import { useEffect, useState } from 'react'

const useScreenDimension = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(0);

    const handleResize = () => {
        var w = window.innerWidth;
        if (w <= 991) {
            setIsMobile(true);
            setWidth(w);
        }else {
            setIsMobile(false);
        }
    }
    useEffect(() =>{
        window.addEventListener("resize", handleResize);
        return () => {window.removeEventListener("resize", handleResize);}
    } , [width]);

    return {isMobile, width};
}

export default useScreenDimension