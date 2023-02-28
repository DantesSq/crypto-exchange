'use client';
import { Inter } from '@next/font/google';

import React from 'react';
// import axios from 'axios';
import CryptoElement from '../components/CryptoElement';
import { useFetchCryptoBySearchQuery } from '@/services/CryptoService';
import { cryptoItem } from '@/models/cryptoItem';
import useDebounce from '@/hooks/debounce';
import LoadingBtn from '../components/LoadingBtn';
import CryptoElementSkeleton from '../components/CryptoElementSkeleton';

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
    const [limit, setLimit] = React.useState(20);
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false);
    const debouncedSearchQuery = useDebounce(searchQuery, 500);
    const { data, isLoading } = useFetchCryptoBySearchQuery(
        { search: debouncedSearchQuery, limit: limit },
        { pollingInterval: 15000 },
    );

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(() => {
        if (limit === data?.data.length) {
            setLoading(false);
        }
    }, [data, limit]);

    const handleScroll = (e: Event) => {
        const target = e.target as Document;
        if (
            target.documentElement.scrollHeight -
                (target.documentElement.scrollTop + window.innerHeight) <
            5
        ) {
            // setLimit((prev) => prev + 20);
            setLoading(true);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="my-[40px] px-[20px] lg:px-[60px] dark:bg-primaryD lg:container ">
            <div className="p-[25px] pb-[10px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text dark:text-gray ">
                <div className=" flex items-center justify-between">
                    <h1 className="text-[20px] my-4">Market Coins</h1>
                    <div className="relative max-md:hidden">
                        <svg
                            className="absolute top-[50%] translate-y-[-50%] left-[10px]"
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity="0.1"
                                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                fill="#babcc3"
                            />
                            <path
                                d="M15 15L21 21"
                                stroke="#babcc3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="#babcc3"
                                strokeWidth="2"
                            />
                        </svg>
                        <input
                            className="border-solid border-[1px] border-secondL rounded w-[320px] h-[40px] pl-[40px] dark:bg-secondD"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search Coin Name"
                        />
                    </div>
                </div>
                <div className="block overflow-x-auto w-full">
                    <table className="w-full ">
                        <thead>
                            <tr className="flex items-center justify-start h-[60px] border-y-2 border-grayL dark:border-text border-solid text-gray">
                                <th className="  flex w-[5%] ">#</th>
                                <th className="flex w-[20%] ">Crypto Name</th>
                                <th className=" max-[890px]:w-[200px] w-[15%] flex justify-center ">
                                    Crypto Price
                                </th>
                                <th className="max-[890px]:w-[200px] w-[15%] flex justify-center ">
                                    24h%
                                </th>
                                <th className="max-[890px]:w-[200px] w-[25%] flex justify-center ">
                                    MarketCup Volume
                                </th>
                                <th className="max-[890px]:w-[200px] w-[20%] flex justify-center ">
                                    Volume 24h
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data &&
                                data.data &&
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
                        </tbody>
                    </table>
                </div>
            </div>
            {loading && (
                <div className="w-full text-center">
                    <LoadingBtn />
                </div>
            )}
        </div>
    );
};

export default Home;
