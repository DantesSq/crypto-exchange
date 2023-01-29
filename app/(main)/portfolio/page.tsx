'use client';

import Balance from '@/app/components/Balance';
import Exchange from '@/app/components/Exchange';
import PortfolioItems from '@/app/components/PortfolioItems';
import { useAppSelector } from '@/hooks/redux';
import React from 'react';

const PortfolioPage = () => {
    const { userInfo } = useAppSelector((state) => state.usersSlice);

    if (!userInfo?.id) return <>sign in</>;

    return (
        <div className="bg-[#e6e9f2] min-h-[100vh] pt-[50px]">
            <div className="lg:container mx-auto 2xl:px-[120px] lg:px-[20px] px-[50px] flex justify-between flex-wrap">
                <div className="lg:w-[75%]  w-[100%] mr-0">
                    <Balance />
                    <PortfolioItems />
                </div>
                <Exchange />
            </div>
        </div>
    );
};

export default PortfolioPage;
