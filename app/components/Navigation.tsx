'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { signOutUser } from '@/store/users/usersSlice';
import Link from 'next/link';
import React from 'react';
import NavigationItem from './NavigationItem';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import MobileNavigationItem from './MobileNavigationItem';

const navItems = [
    { name: 'Markets', href: '/' },
    { name: 'Watchlist', href: '/watchlist' },
    { name: 'Portfolio', href: '/portfolio' },
];

const Navigation = () => {
    const dispatch = useAppDispatch();
    const { authorized } = useAppSelector((state) => state.usersSlice);

    const pathname = usePathname();

    const { theme, systemTheme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [openPopup, setOpenPopup] = React.useState(false);
    const [y, setY] = React.useState(window.pageYOffset);

    const signout = () => {
        dispatch(signOutUser());
    };

    const closePopup = () => {
        setOpenPopup(false);
    };

    React.useEffect(() => {
        const body = document.body;
        if (openPopup) {
            body.style.height = '100vh';
            body.style.overflowY = 'hidden';
            setY(window.pageYOffset);
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, y);
            body.style.height = '';
            body.style.overflowY = '';
        }
    }, [openPopup]);

    return (
        <nav className={'h-[100%] text-black dark:text-text'}>
            <div
                className={`${
                    openPopup ? 'justify-end' : 'justify-between'
                } h-[100%] lg:container mx-auto px-[20px] md:px-[60px] xl:px-[120px] flex items-center justify-end`}>
                {!openPopup && (
                    <ul className="h-[100%] flex justify-start items-center w-[50%]  lg:w-[20%] xl:w-[33.33%]">
                        <Link
                            className="text-[18px] md:text-[16px] pr-[20px] flex items-center space-x-[15px] border-r-[2px] border-gray border-solid black:text-white"
                            href="/">
                            <svg
                                className="md:w-[40px] md:h-[40px] w-[35px] h-[35px]"
                                fill="#0083f8"
                                viewBox="0 0 1920 1920"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                    <path d="M958.568 277.97C1100.42 277.97 1216.48 171.94 1233.67 34.3881 1146.27 12.8955 1054.57 0 958.568 0 864.001 0 770.867 12.8955 683.464 34.3881 700.658 171.94 816.718 277.97 958.568 277.97ZM35.8207 682.031C173.373 699.225 279.403 815.285 279.403 957.136 279.403 1098.99 173.373 1215.05 35.8207 1232.24 12.8953 1144.84 1.43262 1051.7 1.43262 957.136 1.43262 862.569 12.8953 769.434 35.8207 682.031ZM528.713 957.142C528.713 1005.41 489.581 1044.55 441.31 1044.55 393.038 1044.55 353.907 1005.41 353.907 957.142 353.907 908.871 393.038 869.74 441.31 869.74 489.581 869.74 528.713 908.871 528.713 957.142ZM1642.03 957.136C1642.03 1098.99 1748.06 1215.05 1885.61 1232.24 1908.54 1144.84 1920 1051.7 1920 957.136 1920 862.569 1908.54 769.434 1885.61 682.031 1748.06 699.225 1642.03 815.285 1642.03 957.136ZM1567.51 957.142C1567.51 1005.41 1528.38 1044.55 1480.11 1044.55 1431.84 1044.55 1392.71 1005.41 1392.71 957.142 1392.71 908.871 1431.84 869.74 1480.11 869.74 1528.38 869.74 1567.51 908.871 1567.51 957.142ZM958.568 1640.6C816.718 1640.6 700.658 1746.63 683.464 1884.18 770.867 1907.11 864.001 1918.57 958.568 1918.57 1053.14 1918.57 1146.27 1907.11 1233.67 1884.18 1216.48 1746.63 1100.42 1640.6 958.568 1640.6ZM1045.98 1480.11C1045.98 1528.38 1006.85 1567.51 958.575 1567.51 910.304 1567.51 871.172 1528.38 871.172 1480.11 871.172 1431.84 910.304 1392.71 958.575 1392.71 1006.85 1392.71 1045.98 1431.84 1045.98 1480.11ZM1045.98 439.877C1045.98 488.148 1006.85 527.28 958.575 527.28 910.304 527.28 871.172 488.148 871.172 439.877 871.172 391.606 910.304 352.474 958.575 352.474 1006.85 352.474 1045.98 391.606 1045.98 439.877ZM1441.44 1439.99C1341.15 1540.29 1333.98 1697.91 1418.52 1806.8 1579 1712.23 1713.68 1577.55 1806.82 1418.5 1699.35 1332.53 1541.74 1339.7 1441.44 1439.99ZM1414.21 1325.37C1414.21 1373.64 1375.08 1412.77 1326.8 1412.77 1278.53 1412.77 1239.4 1373.64 1239.4 1325.37 1239.4 1277.1 1278.53 1237.97 1326.8 1237.97 1375.08 1237.97 1414.21 1277.1 1414.21 1325.37ZM478.577 477.145C578.875 376.846 586.039 219.234 501.502 110.339 341.024 204.906 206.338 339.592 113.203 498.637 220.666 584.607 378.278 576.01 478.577 477.145ZM679.155 590.32C679.155 638.591 640.024 677.723 591.752 677.723 543.481 677.723 504.349 638.591 504.349 590.32 504.349 542.048 543.481 502.917 591.752 502.917 640.024 502.917 679.155 542.048 679.155 590.32ZM1440 475.712C1540.3 576.01 1697.91 583.174 1806.8 498.637 1712.24 338.159 1577.55 203.473 1418.51 110.339 1332.54 217.801 1341.13 375.413 1440 475.712ZM1414.21 590.32C1414.21 638.591 1375.08 677.723 1326.8 677.723 1278.53 677.723 1239.4 638.591 1239.4 590.32 1239.4 542.048 1278.53 502.917 1326.8 502.917 1375.08 502.917 1414.21 542.048 1414.21 590.32ZM477.145 1438.58C376.846 1338.28 219.234 1331.12 110.339 1415.65 204.906 1576.13 339.593 1710.82 498.637 1805.39 584.607 1696.49 577.443 1538.88 477.145 1438.58ZM679.155 1325.37C679.155 1373.64 640.024 1412.77 591.752 1412.77 543.481 1412.77 504.349 1373.64 504.349 1325.37 504.349 1277.1 543.481 1237.97 591.752 1237.97 640.024 1237.97 679.155 1277.1 679.155 1325.37Z" />
                                </g>
                            </svg>
                            <h1>Dante Crypto</h1>
                        </Link>
                    </ul>
                )}
                <ul className="hidden lg:flex h-[100%] justify-around w-[33.33%]">
                    {navItems.map((item) => (
                        <NavigationItem
                            key={item.name}
                            children={item.name}
                            href={item.href}
                            pathname={pathname}
                        />
                    ))}
                </ul>

                <ul className="h-[100%] flex items-center justify-end lg:w-[33.33%] ">
                    {!openPopup && (
                        <div className="max-lg:mr-[15px]">
                            {currentTheme === 'dark' ? (
                                <svg
                                    className="hover:cursor-pointer "
                                    onClick={() => {
                                        setTheme('light');
                                    }}
                                    width="35x"
                                    height="35px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 12H5M5.00006 19L7.00006 17M12 19V21M17 17L19 19M5 5L7 7M19 12H21M16.9999 7L18.9999 5M12 3V5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="#ffffff"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="hover:cursor-pointer fill-secondD rotate-[30deg]"
                                    onClick={() => {
                                        setTheme('dark');
                                    }}
                                    width="30px "
                                    height="30px "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.8667 15.3164C20.9187 15.1983 20.8006 15.0785 20.6792 15.1223V15.1223C17.3165 16.3368 13.4497 15.6201 10.9124 13.0837C8.38689 10.5592 7.66861 6.7169 8.86147 3.36559V3.36559C8.91069 3.22729 8.77418 3.09296 8.64021 3.15299C8.63117 3.15704 8.62214 3.16111 8.61311 3.16518C6.75765 4.00313 5.10654 5.4166 4.13683 7.19736C3.1002 9.10101 2.75831 11.3058 3.16975 13.4339C3.58119 15.5619 4.72034 17.4806 6.39193 18.861C8.06352 20.2414 10.1634 20.9977 12.3317 21C14.1962 21.0001 16.0181 20.4424 17.5629 19.3987C18.9891 18.4352 20.1189 16.9756 20.8311 15.3962C20.8431 15.3697 20.8549 15.343 20.8667 15.3164Z"
                                        stroke="none"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </div>
                    )}

                    {authorized ? (
                        <li className="hidden lg:block">
                            <button
                                onClick={signout}
                                className=" bg-[#d9dbe1] dark:bg-primaryD dark:hover:bg-secondD px-[28px] py-[13px] text-primaryL rounded-xl mx-3">
                                Sign Out
                            </button>
                        </li>
                    ) : (
                        <li className="hidden lg:flex">
                            <Link
                                className=" bg-[#d9dbe1] dark:bg-black dark:hover:bg-secondD px-[28px] py-[13px] text-primaryL rounded-xl mx-3"
                                href="/signin">
                                Sign In
                            </Link>
                            <Link
                                className=" bg-blue px-[28px] py-[13px] text-[#d9dbe1] rounded-xl mx-3"
                                href="/signup">
                                Sign Up
                            </Link>
                        </li>
                    )}
                    <div
                        className="lg:hidden h-[33px] w-[45px] mr-[15px] rounded relative hover:cursor-pointer"
                        onClick={() => {
                            setOpenPopup((prev) => !prev);
                        }}>
                        <div className="absolute w-[45px] h-[5px] rounded-xl bg-black dark:bg-grayL top-0 right-0"></div>
                        <div className="absolute w-[45px] h-[5px] rounded-xl bg-black dark:bg-grayL top-[50%] translate-y-[-50%] right-0"></div>
                        <div className="absolute w-[45px] h-[5px] rounded-xl bg-black dark:bg-grayL bottom-0 right-0"></div>
                    </div>
                </ul>
            </div>
            {openPopup && (
                <div
                    className={`top-[${window.pageYOffset}px] w-full h-screen overflow-y-hidden absolute z-10 bg-white dark:bg-secondD `}>
                    <ul className="pt-[90px] px-[30px] space-y-[40px] text-center text-[22px]">
                        <MobileNavigationItem
                            href="/"
                            text="Markets"
                            pathname={pathname}
                            closePopup={closePopup}
                        />
                        <MobileNavigationItem
                            href="/watchlist"
                            text="Watchlist"
                            pathname={pathname}
                            closePopup={closePopup}
                        />
                        <MobileNavigationItem
                            href="/portfolio"
                            text="Portfolio"
                            pathname={pathname}
                            closePopup={closePopup}
                        />
                        {authorized ? (
                            <li
                                className="hover:text-primaryL hover:cursor-pointer"
                                onClick={() => {
                                    closePopup();
                                    signout();
                                }}>
                                Log Out
                            </li>
                        ) : (
                            <>
                                <MobileNavigationItem
                                    href="/signin"
                                    text="Sign In"
                                    pathname={pathname}
                                    closePopup={closePopup}
                                />
                                <MobileNavigationItem
                                    href="/signup"
                                    text="Sign Up"
                                    pathname={pathname}
                                    closePopup={closePopup}
                                />
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
