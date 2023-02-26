import React from 'react';

const CryptoElementSkeleton = () => {
    return (
        <div className="flex items-center h-[40px] my-[15px] animate-pulse">
            <div className="w-[5%]">
                <div className="w-[30px] h-5 bg-gray dark:bg-text rounded"></div>
            </div>
            <div className="w-[20%] flex items-center space-x-[8px]">
                <div className="rounded-full bg-grat h-[25px] w-[25px] bg-gray dark:bg-text"></div>
                <div className="h-3 w-[60px] bg-gray dark:bg-text rounded"></div>
                <div className="h-5 w-[25px] bg-gray dark:bg-text rounded"></div>
            </div>
            <div className="w-[10%] bg-gray dark:bg-text h-3 rounded"></div>
            <div className="w-[5%] mx-[30px] bg-gray dark:bg-text h-3 rounded"></div>
            <div className="w-[15%] mx-[30px] bg-gray dark:bg-text h-3 rounded"></div>
            <div className="w-[10%] mx-[30px] bg-gray dark:bg-text h-3 rounded"></div>
        </div>
    );
};

export default CryptoElementSkeleton;
