import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="w-full h-[125px]">
            <nav className="h-[100%] container mx-50px px-[40px] flex items-center justify-between text-black">
                <ul>
                    <li>
                        <Link href="/" className="px-[15px]">
                            Dante Crypto Logo
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
