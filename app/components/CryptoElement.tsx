'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { changeFavourite } from '@/store/favourite/favouriteSlice';
import { currencyFormat } from '@/utils/CurrencyFormat';

import Image from 'next/image';
import React, { FC } from 'react';

interface CryptoElementProps {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    priceUsd: string;
    changePercent24Hr: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
}

const CryptoElement: FC<CryptoElementProps> = ({
    id,
    rank,
    symbol,
    name,
    priceUsd,
    changePercent24Hr,
    marketCapUsd,
    volumeUsd24Hr,
}) => {
    const dispatch = useAppDispatch();
    const { favourite } = useAppSelector((state) => state.favouriteSlice);

    const [imgError, setImgError] = React.useState(false);

    const profitColor = changePercent24Hr
        ? changePercent24Hr[0] === '-'
            ? 'text-red'
            : 'text-green'
        : 0;
    const symbolProfit = changePercent24Hr ? (changePercent24Hr[0] === '-' ? '' : '+') : '';
    const isFavourite = favourite.includes(id) ? '#f6b87e' : '#babcc3';

    const addToFavourite = () => {
        dispatch(changeFavourite(id));
    };

    return (
        <tr className="flex items-center justify-start h-[40px] my-[15px] text-text dark:text-gray ">
            <td className="flex items-center space-x-[8px] w-[5%] ">
                <svg
                    className="hover:cursor-pointer"
                    onClick={addToFavourite}
                    fill={isFavourite}
                    height="15px"
                    width="15px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 489.914 489.914"
                    xmlSpace="preserve"
                    stroke="#d6d6d6">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M483.871,204.522c5.38-4.725,7.395-12.197,5.123-18.98c-2.272-6.785-8.394-11.538-15.53-12.07l-142.249-10.618 c-6.607-0.502-12.376-4.609-14.982-10.682L259.738,21.184c-2.838-6.555-9.331-10.793-16.484-10.714 c-7.137,0.066-13.549,4.401-16.259,11.021l-54.056,132.016c-2.497,6.125-8.204,10.346-14.792,10.956l-142.04,13.245 c-7.117,0.66-13.146,5.527-15.29,12.343c-2.142,6.817,0.017,14.263,5.461,18.884l108.845,92.216 c5.046,4.288,7.299,11.005,5.851,17.452L89.682,457.786c-1.565,6.978,1.19,14.212,7.023,18.369c5.834,4.141,13.566,4.4,19.658,0.627 l121.315-75.039c5.624-3.477,12.715-3.545,18.417-0.159l122.686,72.767c6.14,3.642,13.888,3.256,19.624-0.998 c5.738-4.254,8.381-11.555,6.671-18.496l-33.839-138.575c-1.579-6.43,0.547-13.198,5.511-17.561L483.871,204.522z"></path>
                    </g>
                </svg>
                <h1 className="">{rank}</h1>
            </td>
            <td className="flex items-center space-x-[10px] w-[20%] ">
                <Image
                    alt=""
                    src={
                        imgError
                            ? 'https://via.placeholder.com/35'
                            : `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
                    }
                    onError={() => {
                        setImgError(true);
                    }}
                    width={25}
                    height={25}
                    className={'md:w-[25px] md:h-[25px] w-[30px] h-[30px]'}
                />
                <h1 className="hidden md:block">{name}</h1>
                <h1 className="hidden md:block text-[12px] text-[#6171fe] px-[5px] py-[2px] bg-[#e9eaef] dark:bg-primaryD rounded">
                    {symbol}
                </h1>
                <h1 className="block md:hidden">{symbol}</h1>
            </td>
            <td className="w-[15%]  flex justify-center max-[890px]:w-[120px]">
                {currencyFormat(Number(priceUsd))}
            </td>
            <td className={`w-[15%] flex justify-center max-[890px]:w-[200px] ${profitColor}`}>
                {symbolProfit}
                {Number(changePercent24Hr).toFixed(2)} %
            </td>
            <td className="w-[25%]  flex justify-center max-[890px]:w-[250px]">
                {currencyFormat(Number(marketCapUsd))}
            </td>
            <td className="w-[20%]  flex justify-center max-[890px]:w-[250px]">
                {currencyFormat(Number(volumeUsd24Hr))}
            </td>
        </tr>
    );
};

export default CryptoElement;
