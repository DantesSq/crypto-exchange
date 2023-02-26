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
            <div className="container px-[60px] mt-4 ">
                <div className="p-[25px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text">
                    <h1 className="text-[20px] my-4">Your Watchlist</h1>

                    <div className="sort__items flex justify-between items-center h-[60px] border-y-2 border-grayL dark:border-text border-solid text-gray">
                        <div className="w-[5%]">#</div>
                        <div className="w-[20%]">Crypto Name</div>
                        <div className="w-[10%]">Crypto Price</div>
                        <div className="w-[5%]">24h%</div>
                        <div className="w-[15%]">MarketCup Volume</div>
                        <div className="w-[10%]">Volume 24h</div>
                    </div>

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
                </div>
            </div>
        );
    else return <div className="container mx-50px px-[40px]">NO DATA</div>;
};

export default Watchlist;
