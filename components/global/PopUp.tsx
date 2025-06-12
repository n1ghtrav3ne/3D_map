import React from 'react';
import { MdErrorOutline } from "react-icons/md";

interface props{
    close: () => void;
    errorText?: string;
}

const PopUp = ({close,errorText}:props) => {
    return (
        <div className={'absolute top-[30%] mx-auto backdrop-blur bg-opacity-50 w-fit right-0 left-0 bg-gray-800 z-50 flex flex-col items-center gap-4 px-6 py-4 rounded-xl'}>
            <MdErrorOutline size={60} color={'#FF0800'} />
            <span className={'text-xl text-[#FF0800] font-bold'}>Error</span>

            <span className={'text-white text-lg'}>
                {errorText}
            </span>
            <button onClick={close}
                    className={'px-6 py-1 rounded-lg shadow text-xl bg-green-600 text-white font-bold'}
            >
                OK
            </button>
        </div>
    );
};

export default PopUp;