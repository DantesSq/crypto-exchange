import React, { FC } from 'react';

interface PortfolioItemProps {
    id: string;
    price: number;
    quantity: number;
    total: number;
    symbol: string;
    currentPrice: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
    id,
    price,
    quantity,
    total,
    symbol,
    currentPrice,
}) => {
    const currencyFormat = (number: number, n: number) => {
        return '$' + number.toFixed(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    console.log(currentPrice);
    const changes = price - Number(currentPrice);
    const percentChanges = (Number(currentPrice) / (price / 100) - 100).toFixed(0);
    console.log(percentChanges, 'percentchanges');
    const profitColor = percentChanges[0] === '-' ? 'text-[#df3939]' : 'text-[#3cba8d]';
    const symbolProfit = percentChanges[0] === '-' ? '' : '+';

    return (
        <div className="flex mt-[30px]">
            <div className="flex w-[20%] items-center">
                <img
                    alt=""
                    src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                    width={25}
                    height={25}
                />
                <h1 className="px-[8px]">{id}</h1>
                <h1 className="text-[10px] text-[#6171fe] px-[5px] py-[2px] bg-[#e9eaef] rounded">
                    {symbol.toUpperCase()}
                </h1>
            </div>
            <div className="w-[20%]">
                <div className="text-[18px] mt-[-5px]">{currentPrice}</div>
                <div className="text-gray text-[14px] mt-[-5px]">
                    {currencyFormat(Number(price), 2)}
                </div>
            </div>
            <div className="w-[20%]">{quantity}</div>
            <div className="w-[20%]">{total}</div>
            <div className={`w-[20%] ${profitColor}`}>
                {symbolProfit}
                {percentChanges} %
            </div>
        </div>
    );
};

export default PortfolioItem;
