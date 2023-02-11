'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { signOutUser } from '@/store/users/usersSlice';
import Link from 'next/link';
import React from 'react';
import NavigationItem from './NavigationItem';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const dispatch = useAppDispatch();
    const { authorized } = useAppSelector((state) => state.usersSlice);
    const pathname = usePathname();
    const signout = () => {
        dispatch(signOutUser());
    };

    const navItems = [
        { name: 'Markets', href: '/' },
        { name: 'Watchlist', href: '/watchlist' },
        { name: 'Portfolio', href: '/portfolio' },
    ];

    return (
        <nav className="h-[100%] container mx-auto px-[120px] flex items-center justify-between text-black">
            <ul className="h-[100%] flex justify-start items-center w-[33.33%]">
                <Link className="pr-[20px]  border-r-[2px] border-gray border-solid" href="/">
                    Dante Crypto Logo
                </Link>
            </ul>
            <ul className="h-[100%] flex justify-around w-[33.33%]">
                {navItems.map((item) => (
                    <NavigationItem
                        key={item.name}
                        children={item.name}
                        href={item.href}
                        pathname={pathname}
                    />
                ))}
            </ul>

            {authorized ? (
                <ul className="h-[100%] flex justify-end items-center w-[33.33%]">
                    <button
                        onClick={signout}
                        className="bg-[#d9dbe1] px-[28px] py-[13px] text-primaryL rounded-xl mx-3">
                        Sign Out
                    </button>
                </ul>
            ) : (
                <ul className="h-[100%] flex justify-end items-center w-[33.33%]">
                    <Link
                        className="bg-[#d9dbe1] px-[28px] py-[13px] text-primaryL rounded-xl mx-3"
                        href="/signin">
                        Sign In
                    </Link>
                    <Link
                        className="bg-blue px-[28px] py-[13px] text-[#d9dbe1] rounded-xl mx-3"
                        href="/signup">
                        Sign Up
                    </Link>
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
