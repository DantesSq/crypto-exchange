import React from 'react';
import PortfolioItemSkeleton from './PortfolioItemSkeleton';

const PortfolioItemsSkeleton = () => {
    return (
        <div className="px-[20px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text">
            <h1 className="text-[20px] py-[20px]">Coin allocation</h1>
            <div className="flex py-[20px] mb-[20px] border-y-2 border-grayL dark:border-text border-solid text-gray dark:text-text">
                <div className="w-[20%]">Holdings</div>
                <div className="w-[20%]">Price / Avg buy</div>
                <div className="w-[20%]">Holding Assets</div>
                <div className="w-[20%]">Total Asset Value</div>
                <div className="w-[10%]">Proffit / Loss</div>
                <div className="w-[10%]">Actions</div>
            </div>

            <>
                <div className="pb-[20px] border-b-2 border-grayL dark:border-text border-solid">
                    {[...new Array(5)].map((item, id) => (
                        <PortfolioItemSkeleton key={id} />
                    ))}
                </div>
            </>
        </div>
    );
};

export default PortfolioItemsSkeleton;
