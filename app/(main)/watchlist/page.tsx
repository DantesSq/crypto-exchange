'use client';
import React from 'react';

import { useAppSelector } from '@/hooks/redux';
import axios from 'axios';
import CryptoElement from '@/app/components/CryptoElement';
import { cryptoItem } from '@/models/cryptoItem';
import { CryptoApi } from '@/services/CryptoService';

const Watchlist = () => {
    const { favourite } = useAppSelector((state) => state.favouriteSlice);

    const [ids, setIds] = React.useState('');
    // const [data, setData] = React.useState([]);

    const { data } = CryptoApi.useFetchCryptoByIdsQuery(ids);

    React.useEffect(() => {
        // const fetchData = async (favourite: string[]) => {
        //     const { data } = await axios(
        //         `https://api.coincap.io/v2/assets?ids=${favourite.join(',')}`,
        //     );
        //     setData(data.data);
        // };
        if (favourite.length) {
            setIds(favourite.join(','));
            // fetchData(favourite);
        }
    }, [favourite]);

    if (data && data.data.length)
        return (
            <div className="container px-[40px] mt-4 ">
                <div className="p-[20px] my-[20px] bg-white dark:bg-secondD rounded-xl w-[100%] text-text">
                    <h1 className="text-[20px] my-4">Your Watchlist</h1>

                    <div className="sort__items flex justify-between items-center h-[60px] border-y-2 border-grayL dark:border-text border-solid text-gray">
                        <div className="w-[5%]">#</div>
                        <div className="w-[20%]">Crypto Name Name</div>
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
