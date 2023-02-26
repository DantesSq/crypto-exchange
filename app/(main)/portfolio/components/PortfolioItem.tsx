'use client';
import { currencyFormat } from '@/utils/CurrencyFormat';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface PortfolioItemProps {
    id: string;
    symbol: string;
    price: number;
    quantity: number;
    total: number;
    currentPrice: number;
    newTransaction: (arg: string) => void;
    removeItem: (arg: string) => void;
    seeTransactions: (arg: string) => void;
    hide: boolean;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
    id,
    price,
    quantity,
    total,
    symbol,
    currentPrice,
    hide,
    newTransaction,
    removeItem,
    seeTransactions,
}) => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [imgError, setImgError] = React.useState(false);

    const currentTotal = currentPrice * quantity;
    const percentChanges = (currentPrice / (price / 100) - 100).toFixed(0);

    const profitColor = percentChanges[0] === '-' ? 'text-red' : 'text-green';
    const symbolProfit = percentChanges[0] === '-' ? '' : '+';

    const onCLickTransactions = () => {
        seeTransactions(symbol);
    };

    const clickMenu = React.useRef<boolean>(false);

    React.useEffect(() => {
        const bodyRef = document.body;
        const clickOutside = () => {
            if (!clickMenu.current) {
                setOpenMenu(openMenu);
            }

            clickMenu.current = false;
        };

        bodyRef.addEventListener('click', clickOutside);

        return () => {
            bodyRef.removeEventListener('click', clickOutside);
        };
    }, []);

    return (
        <div className="flex mt-[30px] relative dark:text-white">
            <div className="flex w-[20%] items-center">
                <Image
                    alt=""
                    src={
                        imgError
                            ? 'https://via.placeholder.com/35'
                            : `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
                    }
                    onError={() => {
                        setImgError(true);
                    }}
                    width={25}
                    height={25}
                />
                <h1 className="px-[8px]">{id}</h1>
                <h1 className="text-[12px] text-[#6171fe] px-[5px] py-[2px] bg-[#e9eaef] dark:bg-primaryD rounded">
                    {symbol.toUpperCase()}
                </h1>
            </div>
            <div className="w-[20%]">
                <div className="text-[18px] mt-[-5px]">{currencyFormat(currentPrice)}</div>
                <div className="text-gray text-[14px] mt-[-5px]">
                    {hide ? '***' : currencyFormat(Number(price))}
                </div>
            </div>
            <div className="w-[20%] text-gray">{hide ? '***' : quantity}</div>
            <div className="w-[20%] text-gray">{hide ? '***' : currentTotal}</div>
            <div className={`w-[10%] ${profitColor}`}>
                {symbolProfit}
                {percentChanges} %
            </div>
            <div className="w-[10%] flex items-center relative">
                <svg
                    className="hover:cursor-pointer p-[3px] rounded-[50%] hover:border-[2px] dark:hover:border-text hover:border-grayL hover:shadow-lg"
                    onClick={() => {
                        newTransaction(symbol);
                    }}
                    width="26px"
                    height="26px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#babcc3"
                        d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
                    />
                </svg>
                <svg
                    onClick={() => {
                        setOpenMenu((prev) => !prev);
                    }}
                    className="hover:cursor-pointer p-[3px] rounded-[50%] hover:border-[2px] dark:hover:border-text hover:border-grayL hover:shadow-lg"
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
                        fill="#babcc3"
                    />
                    <path
                        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                        fill="#babcc3"
                    />
                    <path
                        d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
                        fill="#babcc3"
                    />
                </svg>
                {openMenu && (
                    <div
                        onClick={() => {
                            clickMenu.current = true;
                        }}
                        className="bg-white dark:bg-secondD shadow-xl left-[20px] p-[5px] rounded absolute  top-[100%] z-10 text-[#0000000] text-[13px]">
                        <Link href={`/portfolio/${symbol}`}>
                            <div
                                onClick={onCLickTransactions}
                                className="flex items-center hover:bg-grayL dark:hover:bg-primaryL hover:cursor-pointer p-[10px] rounded">
                                <svg
                                    className=" mx-[3px]"
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none">
                                    <path
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 17h12M4 17l3.5-3.5M4 17l3.5 3.5M7 7h13m0 0l-3.5-3.5M20 7l-3.5 3.5"
                                    />
                                </svg>
                                <h1>Transactions</h1>
                            </div>
                        </Link>
                        <div
                            onClick={() => {
                                removeItem(symbol);
                            }}
                            className="flex items-center hover:bg-grayL dark:hover:bg-primaryL hover:cursor-pointer p-[10px] rounded">
                            <svg
                                className=" mx-[3px]"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636"
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                            <h1>Remove</h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioItem;
