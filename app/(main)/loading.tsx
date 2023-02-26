import React from 'react';
import CryptoElementSkeleton from '../components/CryptoElementSkeleton';

const loading = () => {
    return (
        <div className="container my-[40px] px-[60px] dark:bg-primaryD">
            <div className="p-[25px] pb-[10px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text dark:text-gray">
                <div className="flex items-center justify-between">
                    <h1 className="text-[20px] my-4">Market Coins</h1>
                    <div className="relative">
                        <svg
                            className="absolute top-[50%] translate-y-[-50%] left-[10px]"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.1"
                                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                fill="#babcc3"
                            />
                            <path
                                d="M15 15L21 21"
                                stroke="#babcc3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="#babcc3"
                                strokeWidth="2"
                            />
                        </svg>
                        <input
                            className="border-solid border-[1px] border-secondL rounded w-[320px] h-[40px] pl-[40px] dark:bg-secondD"
                            type="text"
                            placeholder="Search Coin Name"
                        />
                    </div>
                </div>
                <div className="flex items-center h-[60px] border-b-2 dark:border-text border-grayL border-solid text-gray">
                    <div className="w-[5%]">#</div>
                    <div className="w-[20%]">Crypto Name</div>
                    <div className="w-[10%]">Crypto Price</div>
                    <div className="w-[5%] mx-[30px]">24h%</div>
                    <div className="w-[15%] mx-[30px]">MarketCup Volume</div>
                    <div className="w-[10%] mx-[30px]">Volume 24h</div>
                </div>

                {[...new Array(12)].map((item, id) => (
                    <CryptoElementSkeleton key={id} />
                ))}
            </div>
        </div>
    );
};

export default loading;
