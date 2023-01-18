import { Inter } from '@next/font/google';
import CryptoElement from '@/components/CryptoElement';
import React, { FC } from 'react';

const inter = Inter({ subsets: ['latin'] });

const getData = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets?limit=20');
    const data = await response.json();
    if (!data) {
        throw new Error('Failed to fetch data');
    }
    return data.data;
};

export interface dataItem {
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

const Home = async () => {
    const sdlkkflk = 1234;
    const data: dataItem[] = await getData();
    return (
        <div className="container mx-50px px-[40px]">
            <div className="sort__items flex justify-between items-center h-[60px] border-y-2 border-grayL border-solid text-gray">
                <div className="w-[5%]">#</div>
                <div className="w-[20%]">Crypto Name Name</div>
                <div className="w-[10%]">Crypto Price</div>
                <div className="w-[5%]">24h%</div>
                <div className="w-[15%]">MarketCup Volume</div>
                <div className="w-[10%]">Volume 24h</div>
            </div>

            {data &&
                data.map((item: dataItem, sequence: number) => (
                    <CryptoElement
                        key={item.id}
                        sequence={sequence + 1}
                        id={item.id}
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

export default Home;
