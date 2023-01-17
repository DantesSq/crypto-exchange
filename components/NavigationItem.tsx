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

    const className = pathname === href ? 'text-primaryL' : '';

    return (
        <ul className={className}>
            <Link href={href}>{children}</Link>
        </ul>
    );
};
export default NavigationItem;
