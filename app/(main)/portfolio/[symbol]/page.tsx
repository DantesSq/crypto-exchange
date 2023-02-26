'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useFetchCryptoBySearchQuery } from '@/services/CryptoService';
import {
    setCurrentPage,
    setNextPage,
    setPages,
    setPrevPage,
} from '@/store/pagination/paginationSlice';
import {
    changeItem,
    changeOpenBuyMenu,
    changeOpenMenu,
    removeTransaction,
    transactionTypes,
} from '@/store/portfolio/portfolioSlice';
import { currencyFormat } from '@/utils/CurrencyFormat';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import SearchComponent from '../components/SearchComponent';
import Transaction from './Transaction';

const TransactionsPage = ({ params }: { params: { symbol: string } }) => {
    const { symbol } = params;
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { openMenu, openBuyMenu } = useAppSelector((state) => state.portfolioSlice);

    const setOpenMenu = (arg: boolean) => {
        dispatch(changeOpenMenu(arg));
    };
    const setOpenBuyMenu = (arg: boolean) => {
        dispatch(changeOpenBuyMenu(arg));
    };

    const userId = useAppSelector((state) => state.usersSlice.userInfo?.id);
    const { pages, currentPage, itemsPerPage } = useAppSelector((state) => state.paginationSlice);
    setCurrentPage(1);
    const portfolio = useAppSelector(
        (state) => state.portfolioSlice.usersPortfolio.filter((item) => item.id === userId)[0],
    );
    const coin = portfolio?.coins.filter((item) => item.symbol === symbol)[0];
    const transactions = coin?.transactions;

    console.log(Math.ceil(transactions?.length / itemsPerPage));
    React.useEffect(() => {
        if (!portfolio?.coins.filter((item) => item.symbol === symbol).length || !userId) {
            setTimeout(() => {
                router.push('/');
            }, 2000);
        }
    }, [transactions, userId]);

    if (!portfolio?.coins.filter((item) => item.symbol === symbol).length || !userId) {
        return (
            <div className="w-full text-center">
                <p>{userId ? 'No Transactions' : 'Not Authorized'}</p>
                <p>Redirecting to Home Page...</p>
            </div>
        );
    }

    const { data } = useFetchCryptoBySearchQuery({ search: symbol, limit: 20 });
    const cryptoItem = data?.data[0];

    const quantity = transactions.reduce(
        (item, prev) => item + prev.quantity * (prev.type === transactionTypes.BUY ? 1 : -1),
        0,
    );
    const totalValue = transactions.reduce(
        (item, prev) => item + prev.total * (prev.type === transactionTypes.BUY ? 1 : -1),
        0,
    );
    const avgBuy = totalValue / quantity;
    const currentValue = quantity * Number(cryptoItem?.priceUsd);

    const difference = currentValue - totalValue;

    const textColor = difference > 0 ? 'text-green' : 'text-red';
    const symbolType = difference > 0 ? '+' : '-';

    const [imgError, setImgError] = React.useState(false);

    React.useEffect(() => {
        if (transactions.length) {
            const amountPages = Math.ceil(transactions.length / itemsPerPage);
            dispatch(setPages(amountPages));
        }
    }, [transactions.length]);

    const newTransaction = () => {
        console.log(cryptoItem);
        if (cryptoItem) {
            dispatch(changeItem(cryptoItem));
            dispatch(changeOpenMenu(true));
            dispatch(changeOpenBuyMenu(true));
        }
    };

    React.useEffect(() => {
        dispatch(setCurrentPage(1));
    }, []);

    const deleteTransaction = (transactionId: number) => {
        if (userId) {
            dispatch(
                removeTransaction({ userId: userId, transactionId: transactionId, symbol: symbol }),
            );
        }
    };

    return (
        <div className="p-[10px] mb-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text dark:text-white text-[18px]">
            {openMenu && (
                <SearchComponent
                    setOpenBuyMenu={setOpenBuyMenu}
                    setOpenMenu={setOpenMenu}
                    openMenu={openMenu}
                    openBuyMenu={openBuyMenu}
                />
            )}
            <div className="flex justify-between">
                <div className="flex text-[20px] space-x-[8px] items-center">
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
                        width={35}
                        height={35}
                    />
                    <h1 className="">{currencyFormat(currentValue)}</h1>
                </div>
                <div className="space-x-[8px] text-[16px]">
                    <button
                        onClick={() => {
                            router.push('/portfolio');
                        }}
                        className="bg-grayL text-black dark:bg-primaryD dark:hover:bg-black dark:text-white dark:border-text datk:text-text border-solid border-[1px]  text-center py-[12px] px-[30px] rounded placeholder-white hover:cursor-pointer">
                        <h1>Back</h1>
                    </button>
                    <button
                        onClick={newTransaction}
                        className="bg-[#5367fe] dark:bg-primaryD dark:hover:bg-black dark:border-text datk:text-text border-solid border-[1px] text-white text-center py-[12px] px-[15px] rounded placeholder-white ">
                        Add Transaction
                    </button>
                </div>
            </div>

            <div className="flex space-x-[25px] py-[8px] text-gray text-[14px]">
                <div>
                    <div>Quantity</div>
                    <div className="text-black dark:text-gray text-[18px]">
                        {quantity} {cryptoItem?.symbol}
                    </div>
                </div>
                <div>
                    <div>Avg Buy Price</div>
                    <div className="text-black dark:text-gray text-[18px]">
                        {currencyFormat(avgBuy)}
                    </div>
                </div>
                <div>
                    <div>Profit / Loss</div>
                    <div className={`${textColor} text-[18px]`}>
                        {symbolType}
                        {symbolType === '+'
                            ? currencyFormat(difference)
                            : currencyFormat(-difference)}
                    </div>
                </div>
            </div>

            <div className="flex  py-[13px] pl-[8px] border-y-2 border-grayL dark:border-text border-solid text-gray">
                <div className="w-[50%]">Type</div>
                <div className="w-[20%]">Price</div>
                <div className="w-[20%]">Amount</div>
                <div className="w-[10%]">Actions</div>
            </div>

            {transactions &&
                cryptoItem &&
                [...transactions].reverse().map((item, id) => {
                    if (Math.ceil((id + 1) / itemsPerPage) === currentPage) {
                        return (
                            <Transaction
                                key={id}
                                deleteTransaction={deleteTransaction}
                                transaction={item}
                                cryptoItem={cryptoItem}
                            />
                        );
                    }
                })}
            <>
                <div className="flex justify-between items-center text-center py-[10px]">
                    <h1>{transactions.length} transactions</h1>
                    <div className=" flex space-x-[20px]">
                        <svg
                            onClick={() => {
                                dispatch(setPrevPage());
                            }}
                            className={`p-[5px] w-[25px] h-[25px] rounded hover:cursor-pointer ${
                                currentPage > 1
                                    ? 'fill-primaryL border-[2px] border-solid border-primaryL '
                                    : 'fill-gray'
                            }`}
                            viewBox="0 0 1920 1920"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m1394.006 0 92.299 92.168-867.636 867.767 867.636 867.636-92.299 92.429-959.935-960.065z"
                                fillRule="evenodd"
                            />
                        </svg>
                        <div className="flex justify-between space-x-[8px]">
                            {pages?.map((_item, id) => {
                                return (
                                    <div
                                        className={`text-[18px] hover:cursor-pointer ${
                                            id + 1 === currentPage
                                                ? 'text-[#000000] dark:text-text'
                                                : 'text-gray'
                                        }`}
                                        key={id}
                                        onClick={() => {
                                            dispatch(setCurrentPage(id + 1));
                                        }}>
                                        {id + 1}
                                    </div>
                                );
                            })}
                        </div>
                        <svg
                            onClick={() => {
                                dispatch(setNextPage(transactions.length));
                            }}
                            className={`p-[5px] w-[25px] h-[25px] rounded hover:cursor-pointer ${
                                currentPage < pages.length
                                    ? 'fill-primaryL border-[2px] border-solid border-primaryL '
                                    : 'fill-gray'
                            }`}
                            viewBox="0 0 1920 1920"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M526.299 0 434 92.168l867.636 867.767L434 1827.57l92.299 92.43 959.935-960.065z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </>
        </div>
    );
};

export default TransactionsPage;
