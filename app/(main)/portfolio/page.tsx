'use client';

import Balance from '@/app/(main)/portfolio/components/Balance';
import PortfolioItems from '@/app/(main)/portfolio/components/PortfolioItems';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import React from 'react';
import SignIn from './SignIn';
const PortfolioPage = () => {
    const userId = useAppSelector((state) => state.usersSlice.userInfo?.id);
    if (!userId)
        return (
            <>
                <SignIn />
            </>
        );

    return (
        <div className="bg-[#e6e9f2] dark:bg-primaryD min-h-[100vh] pt-[50px] ">
            <div className="lg:container mx-auto 2xl:px-[120px] lg:px-[20px] px-[50px] flex justify-between flex-wrap">
                <Balance />
                <PortfolioItems />
            </div>
        </div>
    );
};

export default PortfolioPage;
