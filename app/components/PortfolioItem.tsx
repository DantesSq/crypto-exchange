import React from 'react';

const PortfolioItem = () => {
    const currencyFormat = (number: number, n: number) => {
        return '$' + number.toFixed(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };

    const changes = 1;

    const profitColor = changes > 1 ? 'text-[#df3939]' : 'text-[#3cba8d]';
    const symbolProfit = changes > 1 ? '-' : '+';

    return (
        <div className="flex mt-[30px]">
            <div className="flex w-[20%] items-center">
                <img
                    alt=""
                    src={`https://assets.coincap.io/assets/icons/${'bTC'.toLowerCase()}@2x.png`}
                    width={25}
                    height={25}
                />
                <h1 className="px-[8px]">Bitcoin</h1>
                <h1 className="text-[10px] text-[#6171fe] px-[5px] py-[2px] bg-[#e9eaef] rounded">
                    BTC
                </h1>
            </div>
            <div className="w-[20%]">
                <div className="text-[18px] mt-[-5px]">{currencyFormat(Number(40000), 2)}</div>
                <div className="text-gray text-[14px] mt-[-5px]">
                    {currencyFormat(Number(38000), 2)}
                </div>
            </div>
            <div className="w-[20%]">0.10053434</div>
            <div className="w-[20%]">3800</div>
            <div className={`w-[20%] ${profitColor}`}>
                {symbolProfit}
                {10} %
            </div>
        </div>
    );
};

export default PortfolioItem;
