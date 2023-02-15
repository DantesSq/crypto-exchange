import React, { FC } from 'react';

interface PortfolioItemProps {
    id: string;
    symbol: string;
    price: number;
    quantity: number;
    total: number;
    currentPrice: number;
    newTransaction: (arg: string) => void;
    hide: boolean;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
    id,
    price,
    quantity,
    total,
    symbol,
    currentPrice,
    hide,
    newTransaction,
}) => {
    const currencyFormat = (number: number, n: number) => {
        return '$' + number.toFixed(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };

    const currentTotal = currentPrice * quantity;
    const percentChanges = (currentPrice / (price / 100) - 100).toFixed(0);

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
                <div className="text-[18px] mt-[-5px]">{currencyFormat(currentPrice, 2)}</div>
                <div className="text-gray text-[14px] mt-[-5px]">
                    {hide ? '***' : currencyFormat(Number(price), 2)}
                </div>
            </div>
            <div className="w-[20%]">{hide ? '***' : quantity}</div>
            <div className="w-[20%]">{hide ? '***' : currentTotal}</div>
            <div className={`w-[10%] ${profitColor}`}>
                {symbolProfit}
                {percentChanges} %
            </div>
            <div className="w-[10%] flex items-center">
                <svg
                    className="hover:cursor-pointer p-[3px] rounded-[50%] hover:border-[2px] hover:border-grayL hover:shadow-lg"
                    onClick={() => {
                        newTransaction(symbol);
                    }}
                    width="26px"
                    height="26px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#babcc3"
                        d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
                    />
                </svg>
                <svg
                    className="hover:cursor-pointer p-[3px] rounded-[50%] hover:border-[2px] hover:border-grayL hover:shadow-lg"
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
                        fill="#babcc3"
                    />
                    <path
                        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                        fill="#babcc3"
                    />
                    <path
                        d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
                        fill="#babcc3"
                    />
                </svg>
            </div>
        </div>
    );
};

export default PortfolioItem;
