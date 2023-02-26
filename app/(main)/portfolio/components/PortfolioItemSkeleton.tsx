import React from 'react';

const PortfolioItemSkeleton = () => {
    return (
        <div className="flex mt-[30px] relative items-center">
            <div className="w-[20%] flex items-center space-x-[8px]">
                <div className="rounded-full bg-grat h-[25px] w-[25px] bg-gray dark:bg-text"></div>
                <div className="h-3 w-[60px] bg-gray dark:bg-text rounded"></div>
                <div className="h-5 w-[25px] bg-gray dark:bg-text rounded"></div>
            </div>

            <div className="w-[20%]">
                <div className="w-[60px] h-4 bg-gray dark:bg-text mt-[-5px] rounded"></div>
                <div className="w-[35px] h-3 bg-gray dark:bg-text mt-[5px] rounded"></div>
            </div>
            <div className="w-[20%] ">
                <div className="w-[60px] h-4 bg-gray dark:bg-text mt-[-5px] rounded"></div>
            </div>
            <div className="w-[20%] ">
                <div className="w-[60px] h-4 bg-gray dark:bg-text mt-[-5px] rounded"></div>
            </div>

            <div className="w-[10%]">
                <div className="bg-gray dark:bg-text h-3 rounded w-[30px]"></div>
            </div>

            <div className="w-[10%] flex items-center space-x-[5px] relative">
                <div className="rounded-full bg-grat h-[20px] w-[20px] bg-gray dark:bg-text"></div>
                <div className="rounded-full bg-grat h-[20px] w-[20px] bg-gray dark:bg-text"></div>
            </div>
        </div>
    );
};

export default PortfolioItemSkeleton;
