import React, { FC } from 'react';
import { dataItem } from '../../page';
import SearchMenuItem from './SearchMenuItem';

interface FindCoinProps {
    setOpenMenu: (arg: boolean) => void;
    setOpenBuyMenu: (arg: boolean) => void;
    data: dataItem[];
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
                data.map((item: dataItem) => (
                    <SearchMenuItem key={item.id} setOpenBuyMenu={setOpenBuyMenu} item={item} />
                ))}
        </div>
    );
};

export default FindCoin;
