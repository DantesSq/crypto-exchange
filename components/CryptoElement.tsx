import Image from 'next/image';
import React, { FC } from 'react';

interface CryptoElementProps {
    id: number;
    symbol: string;
    name: string;
    priceUsd: string;
    changePercent24Hr: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
}

const CryptoElement: FC<CryptoElementProps> = ({
    id,
    symbol,
    name,
    priceUsd,
    changePercent24Hr,
    marketCapUsd,
    volumeUsd24Hr,
}) => {
    return (
        <div className="flex justify-between">
            <div>{id + 1}</div>
            <div className="flex">
                <img
                    alt=""
                    src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                    width={30}
                    height={30}
                />
                <h1>{name}</h1>
                <h1>{symbol}</h1>
            </div>
            <div>{Number(priceUsd).toFixed(2)}</div>
            <div>{Number(changePercent24Hr).toFixed(2)}</div>
            <div>{Number(marketCapUsd).toFixed(2)}</div>
            <div>{Number(volumeUsd24Hr).toFixed(2)}</div>
        </div>
    );
};

export default CryptoElement;
