import React from 'react';

const BalanceSkeleton = () => {
    return (
        <div className="p-[20px] h-[auto] bg-white dark:bg-secondD rounded-xl w-[100%] animate-pulse">
            <div className="flex justify-between">
                <div className="h-5 w-[80px] bg-gray rounded"></div>

                <div className="bg-gray h-12 w-[120px] rounded"></div>
            </div>

            <div className="lg:mt-[30px] md:flex md:justify-between xl:flex-nowrap md:flex-wrap">
                <div className="xl:w-[30%] flex xl:flex-col w-full lg:justify-around items-center">
                    <div className="h-6 w-[90px] rounded bg-gray"></div>
                    <div className="flex justify-between items-center">
                        <div className="ml-[10px] mr-[10px] lg:ml-0 bg-gray h-8 w-[70px] rounded"></div>
                        <div className="mr-[10px] bg-gray rounded h-8 w-[70px] flex items-center justify-center"></div>
                    </div>
                </div>
                <div className="xl:ml-[15px] xl:w-[70%] w-[100%] md:flex flex-none mt-[10px] justify-around flex-wrap">
                    <div className="md:w-[28%] md:p-[10px] rounded bg-gray dark:bg-primaryD">
                        <div className="flex items-center space-x-[5px]">
                            <div className="h-5 w-[25px] bg-text rounded"></div>
                            <div className="h-3 w-[90px] bg-text rounded"></div>
                        </div>
                        <div className="mt-[30px] h-5 w-[90px] bg-text rounded"></div>
                    </div>
                    <div className="md:w-[28%] md:p-[10px] rounded bg-gray dark:bg-primaryD">
                        <div className="flex items-center space-x-[5px]">
                            <div className="h-5 w-[25px] bg-text rounded"></div>
                            <div className="h-3 w-[90px] bg-text rounded"></div>
                        </div>
                        <div className="mt-[30px] h-5 w-[90px] bg-text rounded"></div>
                    </div>
                    <div className="md:w-[28%] md:p-[10px] rounded bg-gray dark:bg-primaryD">
                        <div className="flex items-center space-x-[5px]">
                            <div className="h-5 w-[25px] bg-text rounded"></div>
                            <div className="h-3 w-[90px] bg-text rounded"></div>
                        </div>
                        <div className="mt-[30px] h-5 w-[90px] bg-text rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceSkeleton;
