'use client';
import useDebounce from '@/hooks/debounce';
import { cryptoItem } from '@/models/cryptoItem';
import { data } from '@/models/data';
import { useFetchCryptoBySearchQuery, useFetchCryptoQuery } from '@/services/CryptoService';
import React, { FC } from 'react';
import SearchMenuItem from './SearchMenuItem';

interface FindCoinProps {
    setOpenMenu: (arg: boolean) => void;
    setOpenBuyMenu: (arg: boolean) => void;
}

const FindCoin: FC<FindCoinProps> = ({ setOpenBuyMenu }) => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const debouncedSearchQuery = useDebounce(searchQuery, 500);
    const { data } = useFetchCryptoBySearchQuery({ search: debouncedSearchQuery, limit: 20 });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <h1 className="text-[20px]">Find coin</h1>
            <input
                value={searchQuery}
                onChange={handleSearch}
                className="rounded border-[2px] dark:bg-secondD dark:border-none border-gray border-solid w-[100%]
py-[5px] pl-[10px] my-[5px]"
            />

            {data &&
                data.data.map((item: cryptoItem) => (
                    <SearchMenuItem key={item.id} setOpenBuyMenu={setOpenBuyMenu} item={item} />
                ))}
        </div>
    );
};

export default FindCoin;
