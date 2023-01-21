'use client';
import React from 'react';

import { useAppSelector } from '@/hooks/redux';
import { dataItem } from '../page';
import axios from 'axios';
import CryptoElement from '@/app/components/CryptoElement';

const Watchlist = () => {
    const { favourite } = useAppSelector((state) => state.favouriteSlice);

    const [data, setData] = React.useState<dataItem[]>([]);

    React.useEffect(() => {
        const fetchData = async (favourite: string[]) => {
            const { data } = await axios(
                `https://api.coincap.io/v2/assets?ids=${favourite.join(',')}`,
            );
            setData(data.data);
        };
        if (favourite.length) {
            fetchData(favourite);
        } else setData([]);
    }, [favourite]);

    if (data.length)
        return (
            <div className="container mx-50px px-[40px]">
                <h1>Watchlist</h1>

                <div className="sort__items flex justify-between items-center h-[60px] border-y-2 border-grayL border-solid text-gray">
                    <div className="w-[5%]">#</div>
                    <div className="w-[20%]">Crypto Name Name</div>
                    <div className="w-[10%]">Crypto Price</div>
                    <div className="w-[5%]">24h%</div>
                    <div className="w-[15%]">MarketCup Volume</div>
                    <div className="w-[10%]">Volume 24h</div>
                </div>

                {data.map((item: dataItem, sequence: number) => (
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
    else return <div className="container mx-50px px-[40px]">NO DATA</div>;
};

export default Watchlist;
