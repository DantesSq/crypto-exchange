'use client';
import axios from 'axios';
import React from 'react';
import { dataItem } from '../(main)/page';
import ExchangeInput from './ExchangeInput';

interface InputItem {
    id: string;
    amount: number;
}

const ExchangeItem = () => {
    const [firstItem, setFirstItem] = React.useState<InputItem | null>(null);
    const [secondItem, setSecondItem] = React.useState<InputItem | null>(null);
    const [data, setData] = React.useState<dataItem | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(`https://api.coincap.io/v2/assets/bitcoin`);
            setData(data.data);
        };

        fetchData();
    }, []);

    React.useEffect(() => {
        if (data) {
            const amount = Number(data.priceUsd).toFixed(0);
            const symbol = data.symbol;
            setFirstItem({ id: 'usd', amount: Number(amount) });
            setSecondItem({ id: symbol, amount: 1 });
        }
    }, [data]);

    const changeInputs = (firstItem: InputItem, secondItem: InputItem) => {
        setFirstItem(secondItem);
        setSecondItem(firstItem);
    };

    if (!firstItem || !secondItem) return <>Error to load data</>;

    return (
        <div>
            <div className="relative mt-[30px]">
                <ExchangeInput id={firstItem.id} amount={firstItem.amount} disabled={false} />
            </div>

            <svg
                onClick={() => {
                    changeInputs(firstItem, secondItem);
                }}
                className="w-full my-[10px] hover:cursor-pointer"
                width="30px"
                height="30px"
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

            <div className="relative">
                <ExchangeInput id={secondItem.id} amount={secondItem.amount} disabled={true} />
            </div>
        </div>
    );
};

export default ExchangeItem;
