import Link from 'next/link';
import React from 'react';
import NavigationItem from './NavigationItem';

const Navigation = () => {
    return (
        <nav className="h-[125px] container mx-auto px-4 flex items-center justify-between text-black">
            <NavigationItem href="/" children="Dante Crypto" />

            <ul className="flex justify-around w-[30%]">
                <NavigationItem href="/markets" children="Markets" />
                <NavigationItem href="/" children="Watchlist" />
                <NavigationItem href="/" children="Portfolio" />
            </ul>
            <ul>
                <NavigationItem href="/" children="Sign Up" />
                <NavigationItem href="/" children="Log In" />
            </ul>
        </nav>
    );
};

export default Navigation;
