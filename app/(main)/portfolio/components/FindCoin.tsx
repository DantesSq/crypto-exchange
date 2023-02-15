import { cryptoItem } from '@/models/cryptoItem';
import React, { FC } from 'react';
import SearchMenuItem from './SearchMenuItem';

interface FindCoinProps {
    setOpenMenu: (arg: boolean) => void;
    setOpenBuyMenu: (arg: boolean) => void;
    data: cryptoItem[];
}

const FindCoin: FC<FindCoinProps> = ({ setOpenMenu, setOpenBuyMenu, data }) => {
    return (
        <div>
            <h1 className="text-[20px]">Find coin</h1>
            <input
                className="rounded border-[2px] border-gray border-solid w-[100%]
py-[5px] pl-[10px] my-[5px]"
            />

            {data &&
                data.map((item: cryptoItem) => (
                    <SearchMenuItem key={item.id} setOpenBuyMenu={setOpenBuyMenu} item={item} />
                ))}
        </div>
    );
};

export default FindCoin;
