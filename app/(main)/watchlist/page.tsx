'use client';
import React from 'react';

import { useAppSelector } from '@/hooks/redux';
import CryptoElement from '@/app/components/CryptoElement';
import { cryptoItem } from '@/models/cryptoItem';
import { CryptoApi } from '@/services/CryptoService';

const Watchlist = () => {
    const { favourite } = useAppSelector((state) => state.favouriteSlice);

    const [ids, setIds] = React.useState('');

    const { data } = CryptoApi.useFetchCryptoByIdsQuery(ids);

    React.useEffect(() => {
        if (favourite.length) {
            setIds(favourite.join(','));
        }
    }, [favourite]);

    if (!favourite.length || !ids) {
        return <div className="container px-[60px] mt-4 text-center">No Coins In Watchlist</div>;
    }

    if (data && data.data.length)
        return (
            <div className="lg:container my-[40px] px-[20px] lg:px-[60px] dark:bg-primaryD">
                <div className="p-[25px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text">
                    <h1 className="text-[20px] my-4">Your Watchlist</h1>
                    <div className="block overflow-x-auto w-full">
                        <table className="w-full ">
                            <thead>
                                <tr className="flex items-center justify-start h-[60px] border-y-2 border-grayL dark:border-text border-solid text-gray">
                                    <th className="  flex w-[5%] ">#</th>
                                    <th className="flex w-[20%] ">Crypto Name</th>
                                    <th className=" w-[15%] flex justify-center max-[890px]:w-[200px]">
                                        Crypto Price
                                    </th>
                                    <th className="w-[15%] flex justify-center max-[890px]:w-[200px]">
                                        24h%
                                    </th>
                                    <th className="w-[25%] flex justify-center max-[890px]:w-[200px]">
                                        MarketCup Volume
                                    </th>
                                    <th className="w-[20%] flex justify-center max-[890px]:w-[200px]">
                                        Volume 24h
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.data.map((item: cryptoItem) => (
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
            </div>
        );
    else return <div className="container mx-50px px-[40px]">NO DATA</div>;
};

export default Watchlist;
