import { useAppDispatch } from '@/hooks/redux';
import { cryptoItem } from '@/models/cryptoItem';
import { changeItem } from '@/store/portfolio/portfolioSlice';
import { setSrcPlaceholder } from '@/utils/SetSrcPlaceholder';

import React, { FC } from 'react';

interface SearchMenuItemProps {
    setOpenBuyMenu: (arg: boolean) => void;
    item: cryptoItem;
}

const SearchMenuItem: FC<SearchMenuItemProps> = ({ setOpenBuyMenu, item }) => {
    const dispatch = useAppDispatch();

    const onClickItem = () => {
        dispatch(changeItem(item));
        setOpenBuyMenu(true);
    };

    return (
        <div
            onClick={onClickItem}
            className=" relative flex items-center w-[100%] py-[15px] rounded-lg hover:bg-grayL hover:cursor-pointer text-[18px]">
            <img
                alt=""
                src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                onError={setSrcPlaceholder}
                width={35}
                height={35}
            />
            <h1 className="px-[8px]">{item.name}</h1>
            <h1 className=" text-[#6171fe] px-[5px] py-[2px] rounded">
                {item.symbol.toUpperCase()}
            </h1>
            <svg
                className="absolute right-0 fill-gray"
                width="15px"
                height="15px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M526.299 0 434 92.168l867.636 867.767L434 1827.57l92.299 92.43 959.935-960.065z"
                    fillRule="evenodd"
                />
            </svg>
        </div>
    );
};

export default SearchMenuItem;
