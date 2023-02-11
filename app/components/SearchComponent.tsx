'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addTransaction, changeType } from '@/store/portfolio/portfolioSlice';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FC } from 'react';
import { dataItem } from '../(main)/page';
import SearchMenuItem from './SearchMenuItem';

const dropIn = {
    hidden: {
        y: '50%',
        width: 0,
        height: 0,
        opacity: 0,
    },
    visible: {
        y: 0,

        opacity: 1,
        width: 600,
        height: 450,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: '10s',
            type: 'spring',
            damping: 40,
            stiffness: 500,
        },
    },
    exit: {
        y: 10,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: '10s',
            type: 'spring',
            damping: 40,
            stiffness: 500,
        },
        opacity: 1,
    },
};

interface SearchComponentProps {
    data: dataItem[];
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
}

const SearchComponent: FC<SearchComponentProps> = ({ data, openMenu, setOpenMenu }) => {
    const dispatch = useAppDispatch();
    const { currentItem, type } = useAppSelector((state) => state.portfolioSlice);
    const userId = useAppSelector((state) => state.usersSlice.userInfo?.id);
    const [openBuyMenu, setOpenBuyMenu] = React.useState(false);
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState<number>(0);
    const [total, setTotal] = React.useState(0);

    const onChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(event.target.value));
        setTotal(price * Number(event.target.value));
    };

    const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
        setTotal(quantity * Number(event.target.value));
    };

    const onClickTransaction = () => {
        if (price && total && quantity && currentItem && userId) {
            dispatch(
                addTransaction({
                    price: price,
                    quantity: quantity,
                    itemId: currentItem.id,
                    userId: userId,
                    symbol: currentItem.symbol.toLowerCase(),
                    name: currentItem.name,
                }),
            );
        }
        console.log(price, quantity, total, currentItem?.id);
    };

    React.useEffect(() => {
        if (currentItem) {
            setPrice(Number(Number(currentItem.priceUsd).toFixed(2)));
        }
    }, [currentItem]);

    if (!openBuyMenu)
        return (
            <AnimatePresence mode="wait" onExitComplete={() => null}>
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex items-center justify-center top-0 left-0 h-[100%] w-[100%] z-[100] bg-[#000000e1]">
                    <motion.div
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        className="py-[30px] px-[30px] bg-white overflow-y-scroll no-scrollbar rounded-lg relative shadow-lg">
                        <div>
                            <svg
                                className="absolute top-[12px] right-[12px] hover:cursor-pointer hover:w-[40px] hover:h-[40px] hover:top-[7px] hover:right-[7px] transition-all"
                                onClick={() => {
                                    setOpenMenu(false);
                                }}
                                width="30px"
                                height="30px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                    fill="#0F1729"
                                />
                            </svg>
                        </div>

                        <h1 className="text-[20px]">Find coin</h1>
                        <input
                            className="rounded border-[2px] border-gray border-solid w-[100%]
        py-[5px] pl-[10px] my-[5px]"
                        />

                        {data &&
                            data.map((item: dataItem) => {
                                return (
                                    <SearchMenuItem
                                        key={item.id}
                                        setOpenBuyMenu={setOpenBuyMenu}
                                        item={item}
                                    />
                                );
                            })}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    return (
        <AnimatePresence mode="wait" onExitComplete={() => null}>
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute flex items-center justify-center top-0 left-0 h-[100%] w-[100%] z-[100] bg-[#000000e1]">
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    className=" shadow-2xl relative py-[30px] px-[30px] bg-white overflow-y-scroll no-scrollbar rounded-lg ">
                    <div>
                        <svg
                            className="absolute top-[12px] right-[12px] hover:cursor-pointer hover:w-[40px] hover:h-[40px] hover:top-[7px] hover:right-[7px] transition-all"
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                fill="#0F1729"
                            />
                        </svg>

                        <svg
                            className="absolute top-[12px] right-[45px] hover:cursor-pointer"
                            onClick={() => {
                                setOpenBuyMenu(false);
                            }}
                            width="30px"
                            height="30px"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.9998 8L6 14L12.9998 21"
                                stroke="#000000"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
                                stroke="#000000"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                dispatch(changeType('buy'));
                            }}
                            className={`text-center text-[22px] pb-[20px] mb-[20px] mx-[10px] hover:cursor-pointer ${
                                type === 'buy'
                                    ? ' border-primaryL border-solid text-primaryL border-b-2 '
                                    : 'hover:text-gray'
                            }`}>
                            Buy coin
                        </button>
                        <button
                            onClick={() => {
                                dispatch(changeType('sell'));
                            }}
                            className={`text-center text-[22px] pb-[20px] mb-[20px] mx-[10px] hover:cursor-pointer ${
                                type === 'buy'
                                    ? 'hover:text-gray'
                                    : ' border-primaryL border-solid text-primaryL border-b-2 '
                            }`}>
                            Sell coin
                        </button>
                    </div>
                    <div className="flex items-center">
                        <img
                            alt=""
                            src={`https://assets.coincap.io/assets/icons/${currentItem?.symbol.toLowerCase()}@2x.png`}
                            width={35}
                            height={35}
                        />
                        <h1 className="text-[20px] px-[6px]">{currentItem?.name}</h1>
                        <h1 className="text-[20px]">{currentItem?.symbol}</h1>
                    </div>
                    <div className="flex justify-between mt-[20px]">
                        <div>
                            <h1 className="text-[20px]">Quantity</h1>
                            <input
                                value={quantity ? quantity : ''}
                                onChange={onChangeQuantity}
                                type="number"
                                placeholder="0.00"
                                className="text-[18px] border border-solid border-gray rounded pl-[10px] py-[8px]"
                            />
                        </div>
                        <div>
                            <h1 className="text-[20px]"> Price Per Coin</h1>
                            <div className="relative">
                                <p className="absolute left-[6px] top-[50%] translate-y-[-50%] text-[18px]">
                                    $
                                </p>
                                <input
                                    type="number"
                                    value={price ? price : ''}
                                    onChange={onChangePrice}
                                    className="text-[18px] border border-solid border-gray rounded pl-[15px] py-[8px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100% bg-[#e6e9f2] mt-[30px] py-[10px] px-[10px]">
                        <h1>{type === 'buy' ? 'Total received' : 'Total spent'}</h1>
                        <h1 className=" text-xl">${total.toFixed(2)}</h1>
                    </div>
                    <button
                        onClick={onClickTransaction}
                        className="bg-[#5367fe] text-white text-center w-[100%] py-[15px] mt-[40px] rounded placeholder-white">
                        Add Transaction
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SearchComponent;
