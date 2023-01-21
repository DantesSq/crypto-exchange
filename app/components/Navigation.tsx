import Link from 'next/link';
import React from 'react';
import NavigationItem from './NavigationItem';

const Navigation = () => {
    return (
        <nav className="h-[100%] container mx-50px px-[40px] flex items-center justify-between text-black">
            <ul className="h-[100%] flex justify-start items-center w-[33.33%]">
                <Link className="px-[15px]  border-r-[2px] border-gray border-solid" href="/">
                    Dante Crypto Logo
                </Link>
            </ul>
            <ul className="h-[100%] flex justify-around w-[33.33%]">
                <NavigationItem href="/" children="Markets" />
                <NavigationItem href="/watchlist" children="Watchlist" />
                <NavigationItem href="/portfolio" children="Portfolio" />
            </ul>
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
        </nav>
    );
};

export default Navigation;