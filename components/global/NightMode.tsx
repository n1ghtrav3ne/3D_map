'use client'

import React from 'react';
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

interface nightModeProps {
    night:boolean;
    setNight:(night:boolean) => void;
}
const NightMode = ({night,setNight}:nightModeProps) => {

    const toggleNightMode=()=>{
        setNight(!night)
    }
    return (
        <div onClick={toggleNightMode}
             className={`${night?'bg-amber-400':'bg-[#000DA1]'} 
             fixed z-50 flex duration-300 flex-col mr-6 lg:mr-12 top-[20%] lg:top-[20%] 
             p-3 shadow cursor-pointer overflow-hidden rounded-full`}
        >
            <FaRegMoon className={`${night?'-translate-y-[150%] rotate-[360deg] transition-all':'translate-y-0'}
                        duration-1000`}
                       size={25}
                       color={'#ffffff'} />

            <MdOutlineWbSunny className={`${!night?'translate-y-[150%] ':'translate-y-0'}
                              absolute duration-1000`}
                              size={25}
                              color={'#ffffff'} />
        </div>
    );
};

export default NightMode;