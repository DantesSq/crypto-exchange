'use client';
import { Inter } from '@next/font/google';

import React, { FC } from 'react';
// import axios from 'axios';
import CryptoElement from '../components/CryptoElement';
import { CryptoApi } from '@/services/CryptoService';
import { cryptoItem } from '@/models/cryptoItem';

const inter = Inter({ subsets: ['latin'] });

// const getData = async () => {
//     const { data } = await axios('https://api.coincap.io/v2/assets?limit=120');

//     if (!data) {
//         throw new Error('Failed to fetch data');
//     }
//     return data.data;
// };

// export interface dataItem {
//     id: string;
//     rank: string;
//     symbol: string;
//     name: string;
//     supply: string;
//     maxSupply: string;
//     marketCapUsd: string;
//     volumeUsd24Hr: string;
//     priceUsd: string;
//     changePercent24Hr: string;
//     vwap24Hr: string;
//     explorer: string;
// }

const Home = () => {
    // const data: dataItem[] = await getData();
    const { data } = CryptoApi.useFetchCryptoQuery(20, { pollingInterval: 15000 });
    console.log(data?.data[0].priceUsd);

    return (
        <div className="container my-[50px] px-[40px] dark:bg-primaryD">
            <div className="px-[20px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text">
                <div className="sort__items flex justify-between items-center h-[60px] border-b-2 dark:border-text border-grayL border-solid text-gray">
                    <div className="w-[5%]">#</div>
                    <div className="w-[20%]">Crypto Name Name</div>
                    <div className="w-[10%]">Crypto Price</div>
                    <div className="w-[5%]">24h%</div>
                    <div className="w-[15%]">MarketCup Volume</div>
                    <div className="w-[10%]">Volume 24h</div>
                </div>
                <>
                    {data &&
                        data.data.map((item: cryptoItem) => (
                            <CryptoElement
                                key={item.id}
                                rank={item.rank}
                                id={item.id}
                                symbol={item.symbol}
                                name={item.name}
                                priceUsd={item.priceUsd}
                                changePercent24Hr={item.changePercent24Hr}
                                marketCapUsd={item.marketCapUsd}
                                volumeUsd24Hr={item.volumeUsd24Hr}
                            />
                        ))}
                </>
            </div>
        </div>
    );
};

export default Home;
