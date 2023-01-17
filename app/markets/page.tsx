import CryptoElement from '@/components/CryptoElement';
import React, { FC } from 'react';

const getData = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets?limit=20');
    const data = await response.json();
    if (!data) {
        throw new Error('Failed to fetch data');
    }
    return data.data;
};

interface dataItem {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
}

const Markets = async () => {
    const data: dataItem[] = await getData();
    return (
        <div className="container mx-auto">
            <div className="sort__items flex justify-between h-[60px] border-b-4 border-primaryL">
                <div>#</div>
                <div>Crypto Name</div>
                <div>Crypto Price</div>
                <div>24h%</div>
                <div>MarketCup Volume</div>
                <div>Volume 24h 1111111111</div>
            </div>

            {data &&
                data.map((item: dataItem, id: number) => (
                    <CryptoElement
                        key={item.id}
                        id={id}
                        symbol={item.symbol}
                        name={item.name}
                        priceUsd={item.priceUsd}
                        changePercent24Hr={item.changePercent24Hr}
                        marketCapUsd={item.marketCapUsd}
                        volumeUsd24Hr={item.volumeUsd24Hr}
                    />
                ))}
        </div>
    );
};

export default Markets;
