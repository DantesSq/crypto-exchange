import React from 'react';
import BalanceSkeleton from './components/BalanceSkeleton';
import PortfolioItemsSkeleton from './components/PortfolioItemsSkeleton';

const loading = () => {
    return (
        <div className="bg-secondL dark:bg-primaryD min-h-[100vh] pt-[50px] ">
            <div className="lg:container mx-auto 2xl:px-[120px] lg:px-[20px] px-[50px] flex justify-between flex-wrap">
                <BalanceSkeleton />
                <PortfolioItemsSkeleton />
            </div>
        </div>
    );
};

export default loading;
