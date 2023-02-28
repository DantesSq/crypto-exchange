'use client';
import Link from 'next/link';
import React, { FC } from 'react';

interface MobileNavigationItemProps {
    href: string;
    text: string;
    pathname: string | null;
    closePopup: () => void;
}

const MobileNavigationItem: FC<MobileNavigationItemProps> = ({
    href,
    text,
    pathname,
    closePopup,
}) => {
    return (
        <li
            onClick={closePopup}
            className={`hover:text-primaryL transition ease-linear duration-300 ${
                href === pathname ? 'text-primaryL' : ''
            }`}>
            <Link href={href}>{text}</Link>
        </li>
    );
};

export default MobileNavigationItem;
