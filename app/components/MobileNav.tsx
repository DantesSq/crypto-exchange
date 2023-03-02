import Link from 'next/link';
import React, { FC } from 'react';

interface MobileNav {
    pathname: string;
}

const MobileNav: FC<MobileNav> = ({ pathname }) => {
    return (
        <div className="flex items-center justify-center space-x-[20px] text-[26px] p-[20px] md:hidden">
            <Link
                href={'/signin'}
                className={`${
                    pathname === '/signin'
                        ? 'border-b-[3px] pb-[5px] border-primaryL border-solid'
                        : ''
                }`}>
                Sign In
            </Link>
            <Link
                href={'/signup'}
                className={`${
                    pathname === '/signin'
                        ? ''
                        : 'border-b-[3px] pb-[5px] border-primaryL border-solid'
                }`}>
                Sign Up
            </Link>
        </div>
    );
};

export default MobileNav;
