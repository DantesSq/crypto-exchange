'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface NavigationItemProps {
    children: string;
    href: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ children, href }) => {
    const pathname = usePathname();

    const className = pathname === href ? 'text-primaryL border-b-[2px] border-solid' : '';

    return (
        <li className={`${className} h-[100%] flex items-center`}>
            <Link href={href}>{children}</Link>
        </li>
    );
};
export default NavigationItem;
