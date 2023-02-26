import CryptoElementSkeleton from '@/app/components/CryptoElementSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="container px-[60px] mt-4 ">
            <div className="p-[25px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text">
                <h1 className="text-[20px] my-4">Your Watchlist</h1>

                <div className="sort__items flex justify-between items-center h-[60px] border-y-2 border-grayL dark:border-text border-solid text-gray">
                    <div className="w-[5%]">#</div>
                    <div className="w-[20%]">Crypto Name</div>
                    <div className="w-[10%]">Crypto Price</div>
                    <div className="w-[5%]">24h%</div>
                    <div className="w-[15%]">MarketCup Volume</div>
                    <div className="w-[10%]">Volume 24h</div>
                </div>

                {[...new Array(8)].map((item, id) => (
                    <CryptoElementSkeleton />
                ))}
            </div>
        </div>
    );
};

export default loading;
