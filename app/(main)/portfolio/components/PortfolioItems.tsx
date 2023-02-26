'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
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
    removeCoin,
    setTotals,
    transactionTypes,
} from '@/store/portfolio/portfolioSlice';
import PortfolioItem from './PortfolioItem';
import { CryptoApi } from '@/services/CryptoService';

interface coin {
    id: string;
    symbol: string;
    price: number;
    quantity: number;
    total: number;
    currentPrice: number;
    totalReturn: number;
}

const PortfolioItems = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.usersSlice.userInfo?.id);
    const { currentPage, pages, itemsPerPage } = useAppSelector((state) => state.paginationSlice);
    const { hide } = useAppSelector((state) => state.portfolioSlice);

    const portfolio = useAppSelector(
        (state) => state.portfolioSlice.usersPortfolio.filter((item) => item.id === userId)[0],
    );

    const [coins, setCoins] = React.useState<coin[]>();
    const [ids, setIds] = React.useState('');

    const { data, isLoading } = CryptoApi.useFetchCryptoByIdsQuery(ids);

    const newTransaction = (symbol: string) => {
        const item = data?.data.filter(
            (item) => item.symbol.toLowerCase() === symbol.toLowerCase(),
        )[0];
        if (item) {
            dispatch(changeItem(item));
            dispatch(changeOpenMenu(true));
            dispatch(changeOpenBuyMenu(true));
        }
    };

    const removeItem = (symbol: string) => {
        if (userId) {
            dispatch(removeCoin({ userId: userId, symbol: symbol }));
        }
    };
    const seeTransactions = (symbol: string) => {
        const item = portfolio.coins.filter((item) => item.symbol === symbol)[0];
        if (userId && item) {
        }
    };

    React.useEffect(() => {
        dispatch(setCurrentPage(1));
    }, []);

    React.useEffect(() => {
        if (coins && userId) {
            const totalInvestment = coins.reduce((item, prev) => item + prev.total, 0);
            const totalReturn = coins.reduce((item, prev) => item + prev.totalReturn, 0);
            const totalBalance = coins.reduce(
                (item, prev) => item + prev.quantity * prev.currentPrice,
                0,
            );
            const buyTotal = coins.reduce((item, prev) => item + prev.quantity * prev.price, 0);
            const totalProfit = totalBalance - buyTotal;

            dispatch(
                setTotals({
                    userId: userId,
                    investment: totalInvestment,
                    balance: totalBalance,
                    profit: totalProfit,
                    totalReturn: totalReturn,
                }),
            );
        }
    }, [coins]);

    React.useEffect(() => {
        if (portfolio.coins) {
            const ids = portfolio.coins
                .map((item) => item.id)
                .join(',')
                .toLowerCase();
            setIds(ids);
            const amountPages = Math.ceil(portfolio.coins.length / itemsPerPage);
            dispatch(setPages(amountPages));
        }
    }, [portfolio.coins]);
    React.useEffect(() => {
        if (data) {
            const coins = portfolio.coins.map((item) => {
                const currentPrice = data?.data.filter(
                    (cryptoItem) => cryptoItem.symbol.toLowerCase() === item.symbol.toLowerCase(),
                )[0]?.priceUsd;

                if (item.transactions.length > 1) {
                    const buyTransactions = item.transactions.filter(
                        (item) => item.type === transactionTypes.BUY,
                    );
                    const sellTransactions = item.transactions.filter(
                        (item) => item.type === transactionTypes.SELL,
                    );

                    const totalBuyPrices = buyTransactions
                        .map((item) => {
                            return item.total;
                        })
                        .reduce((item, prev) => item + prev, 0);

                    const totalSellPrices = sellTransactions
                        .map((item) => {
                            return item.total;
                        })
                        .reduce((item, prev) => item + prev, 0);

                    const quantityBuy = buyTransactions
                        .map((item) => item.quantity)
                        .reduce((item, prev) => item + prev, 0);

                    const quantitySell = sellTransactions
                        .map((item) => item.quantity)
                        .reduce((item, prev) => item + prev, 0);

                    const quantity = quantityBuy - quantitySell;
                    const avgBuy = totalBuyPrices / quantityBuy;

                    return {
                        id: item.name,
                        symbol: item.symbol,
                        currentPrice: Number(Number(currentPrice).toFixed(2)),
                        price: avgBuy,
                        quantity: quantity,
                        total: totalBuyPrices,
                        totalReturn: totalSellPrices,
                    };
                }
                return {
                    id: item.name,
                    symbol: item.symbol,
                    currentPrice: Number(Number(currentPrice).toFixed(2)),
                    totalReturn: 0,
                    ...item.transactions[0],
                };
            });

            setCoins(coins);
        }
    }, [data, portfolio.coins]);

    return (
        <div className="px-[20px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text">
            <h1 className="text-[20px] py-[20px]">Coin allocation</h1>
            <div className="flex py-[20px] mb-[20px] border-y-2 border-grayL dark:border-text border-solid text-gray dark:text-text">
                <div className="w-[20%]">Holdings</div>
                <div className="w-[20%]">Price / Avg buy</div>
                <div className="w-[20%]">Holding Assets</div>
                <div className="w-[20%]">Total Asset Value</div>
                <div className="w-[10%]">Proffit / Loss</div>
                <div className="w-[10%]">Actions</div>
            </div>
            {coins?.length && (
                <>
                    <div className="pb-[20px] border-b-2 border-grayL dark:border-text border-solid">
                        {data &&
                            coins.map((item, id) => {
                                if (Math.ceil((id + 1) / itemsPerPage) === currentPage) {
                                    return (
                                        <PortfolioItem
                                            key={item.id}
                                            newTransaction={newTransaction}
                                            hide={hide}
                                            removeItem={removeItem}
                                            seeTransactions={seeTransactions}
                                            {...item}
                                        />
                                    );
                                }
                            })}
                    </div>
                    <div className="flex justify-between items-center text-center py-[20px]">
                        <h1>{coins.length} assets</h1>
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
                                    dispatch(setNextPage(portfolio.coins.length));
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
            )}
        </div>
    );
};

export default PortfolioItems;
