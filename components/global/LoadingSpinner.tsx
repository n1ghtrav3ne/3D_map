import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="absolute z-50 top-[40%] right-0 left-0 m-0 flex justify-center items-center py-2">
            <div className="w-[60px] h-[60px] border-4 border-t-[#8000FF] border-gray-300 rounded-full animate-spin" />
        </div>
    );
};

export default LoadingSpinner;
