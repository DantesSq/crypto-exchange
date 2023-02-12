'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { changeItem, changeOpenBuyMenu, changeOpenMenu } from '@/store/portfolio/portfolioSlice';
import axios from 'axios';
import React from 'react';
import { dataItem } from '../../page';
import PortfolioItem from './PortfolioItem';

interface coin {
    id: string;
    price: number;
    quantity: number;
    total: number;
    symbol: string;
    currentPrice: string;
}

const PortfolioItems = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.usersSlice.userInfo?.id);
    const portfolio = useAppSelector(
        (state) => state.portfolioSlice.usersPortfolio.filter((item) => item.id === userId)[0],
    );

    const [coins, setCoins] = React.useState<coin[]>();
    const [data, setData] = React.useState<dataItem[]>();

    const newTransaction = (symbol: string) => {
        const item = data?.filter((item) => item.symbol.toLowerCase() === symbol.toLowerCase())[0];
        if (item) {
            dispatch(changeItem(item));
            dispatch(changeOpenMenu(true));
            dispatch(changeOpenBuyMenu(true));
        }
    };

    React.useEffect(() => {
        if (portfolio.coins) {
            const ids = portfolio.coins.map((item) => item.id);

            const fetchData = async () => {
                const { data } = await axios(
                    `https://api.coincap.io/v2/assets?ids=${ids.join(',').toLowerCase()}`,
                );

                setData(data.data);
            };
            fetchData();
        }
    }, [portfolio.coins]);

    React.useEffect(() => {
        if (data) {
            const coins = portfolio.coins.map((item) => {
                const currentPrice = data?.filter(
                    (dataItem) => dataItem.symbol.toLowerCase() === item.symbol.toLowerCase(),
                )[0]?.priceUsd;

                if (item.transactions.length > 1) {
                    const totalPrices = item.transactions
                        .map((item) => item.total)
                        .reduce((item, prev) => item + prev, 0);
                    const quantity = item.transactions
                        .map((item) => item.quantity)
                        .reduce((item, prev) => item + prev, 0);
                    const avgBuy = totalPrices / quantity;

                    return {
                        id: item.name,
                        currentPrice: Number(currentPrice).toFixed(2),
                        price: avgBuy,
                        quantity: quantity,
                        total: totalPrices,
                        symbol: item.symbol,
                    };
                }
                return {
                    id: item.name,
                    currentPrice: Number(currentPrice).toFixed(2),
                    symbol: item.symbol,
                    ...item.transactions[0],
                };
            });

            setCoins(coins);
        }
    }, [data, portfolio.coins]);

    return (
        <div className="px-[20px] my-[20px] bg-white rounded-xl w-[100%] text-text">
            <h1 className="text-[20px] py-[20px]">Coin allocation</h1>
            <div className="flex py-[20px] mb-[20px] border-y-2 border-grayL border-solid text-gray">
                <div className="w-[20%]">Holdings</div>
                <div className="w-[20%]">Price / Avg buy</div>
                <div className="w-[20%]">Holding Assets</div>
                <div className="w-[20%]">Total Asset Value</div>
                <div className="w-[10%]">Proffit / Loss</div>
                <div className="w-[10%]">Actions</div>
            </div>
            {coins?.length && (
                <>
                    <div className="pb-[20px] border-b-2 border-grayL border-solid">
                        {data &&
                            coins.map((item) => (
                                <PortfolioItem
                                    key={item.id}
                                    newTransaction={newTransaction}
                                    {...item}
                                />
                            ))}
                    </div>
                    <div className="flex justify-between items-center py-[20px] text-gray">
                        <h1>{coins.length} assets</h1>
                        <div className="pagination flex">
                            <h1>{'<'}</h1>
                            <h1>1</h1>
                            <h1>2</h1>
                            <h1>3</h1>
                            <h1>{'>'}</h1>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PortfolioItems;
