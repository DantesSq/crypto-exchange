import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface NavigationItemProps {
    children: string;
    href: string;
    pathname: string | null;
}

const NavigationItem: FC<NavigationItemProps> = ({ children, href, pathname }) => {
    return (
        <li className="h-[100%] flex items-center relative">
            <Link
                className={`hover:text-primaryL transition ease-linear duration-300 ${
                    href === pathname ? 'text-primaryL' : ''
                }`}
                href={href}>
                {children}
                {href === pathname ? (
                    <motion.div
                        className="absolute bottom-[-1px] right-0 left-0 h-[2px] bg-primaryL"
                        layoutId="underline"
                    />
                ) : null}
            </Link>
        </li>
    );
};
export default NavigationItem;
