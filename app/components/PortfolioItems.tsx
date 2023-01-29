import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioItems = () => {
    return (
        <div className="px-[20px] my-[20px] bg-white rounded-xl w-[100%] text-text">
            <h1 className="text-[20px] py-[20px]">Coin allocation</h1>
            <div className="flex py-[20px] mb-[20px] border-y-2 border-grayL border-solid text-gray">
                <div className="w-[20%]">Holdings</div>
                <div className="w-[20%]">Price / Avg buy</div>
                <div className="w-[20%]">Holding Assets</div>
                <div className="w-[20%]">Total Asset Value</div>
                <div className="w-[20%]">Proffit / Loss</div>
            </div>
            <div className="pb-[20px]">
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
            </div>
        </div>
    );
};

export default PortfolioItems;
