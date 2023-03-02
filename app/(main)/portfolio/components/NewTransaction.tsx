import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addTransaction, changeType, transactionTypes } from '@/store/portfolio/portfolioSlice';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';

interface NewTransactionProps {
    setOpenMenu: (arg: boolean) => void;
    setOpenBuyMenu: (arg: boolean) => void;
    onCloseMenu: () => void;
}

type Inputs = {
    quantity: number;
    price: number;
};

const NewTransaction: FC<NewTransactionProps> = ({ setOpenMenu, setOpenBuyMenu, onCloseMenu }) => {
    const dispatch = useAppDispatch();
    const { type, currentItem } = useAppSelector((state) => state.portfolioSlice);
    const userId = useAppSelector((state) => state.usersSlice.userInfo?.id);

    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [imgError, setImgError] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'onBlur',
    });
    const onSubmit = handleSubmit((data) => {
        if (data.price && data.quantity && currentItem && userId) {
            dispatch(
                addTransaction({
                    price: Number(data.price),
                    quantity: Number(data.quantity),
                    itemId: currentItem.id,
                    userId: userId,
                    symbol: currentItem.symbol.toLowerCase(),
                    name: currentItem.name,
                    type: type,
                }),
            );
            dispatch(changeType(transactionTypes.BUY));
            setOpenBuyMenu(false);
            setOpenMenu(false);
            onCloseMenu();
        }
    });

    const onChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(event.target.value));
        setTotal(price * Number(event.target.value));
    };

    const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
        setTotal(quantity * Number(event.target.value));
    };

    React.useEffect(() => {
        if (currentItem) {
            setPrice(Number(Number(currentItem.priceUsd).toFixed(2)));
        }
    }, [currentItem]);

    return (
        <div>
            <div>
                <svg
                    className="absolute top-[12px] right-[45px] hover:cursor-pointer"
                    onClick={() => {
                        setOpenBuyMenu(false);
                        dispatch(changeType(transactionTypes.BUY));
                    }}
                    width="30px"
                    height="30px"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="dark:stroke-white stroke-primaryD"
                        d="M12.9998 8L6 14L12.9998 21"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className="dark:stroke-white stroke-primaryD"
                        d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="flex items-center justify-center">
                <button
                    onClick={() => {
                        dispatch(changeType(transactionTypes.BUY));
                    }}
                    className={`text-center text-[18px] pb-[20px] mb-[20px] mx-[10px] hover:cursor-pointer ${
                        type === 'buy'
                            ? ' border-primaryL border-solid text-primaryL border-b-2 '
                            : 'hover:text-gray'
                    }`}>
                    Buy coin
                </button>
                <button
                    onClick={() => {
                        dispatch(changeType(transactionTypes.SELL));
                    }}
                    className={`text-center text-[18px] pb-[20px] mb-[20px] mx-[10px] hover:cursor-pointer ${
                        type === 'buy'
                            ? 'hover:text-gray'
                            : ' border-primaryL border-solid text-primaryL border-b-2 '
                    }`}>
                    Sell coin
                </button>
            </div>
            <div className="flex items-center">
                <Image
                    alt=""
                    src={
                        imgError
                            ? 'https://via.placeholder.com/35'
                            : `https://assets.coincap.io/assets/icons/${currentItem?.symbol.toLowerCase()}@2x.png`
                    }
                    onError={() => {
                        setImgError(true);
                    }}
                    width={30}
                    height={30}
                />
                <h1 className="text-[18px] px-[6px]">{currentItem?.name}</h1>
                <h1 className="text-[18px]">{currentItem?.symbol}</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div className="flex justify-between mt-[20px]">
                    <div className="w-[50%]">
                        <h1>Quantity</h1>
                        <input
                            type="number"
                            step="any"
                            placeholder="0.00"
                            {...register('quantity', {
                                pattern: {
                                    value: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/g,
                                    message: 'Quantity must be greater than 0',
                                },
                                required: 'Enter Quantity',
                                onChange: onChangeQuantity,
                            })}
                            className="text-[18px] border border-solid border-gray dark:bg-secondD dark:border-none rounded pl-[10px] py-[4px] w-[95%]"
                        />
                        {errors.quantity && (
                            <h1 className="text-xs ml-[5px] text-[#FA8072]">
                                {errors.quantity.message}
                            </h1>
                        )}
                    </div>
                    <div className="w-[50%]">
                        <h1>Price</h1>
                        <div className="relative">
                            <p className="absolute left-[6px] top-[50%] translate-y-[-50%] text-[18px]">
                                $
                            </p>
                            <input
                                type="number"
                                step="any"
                                placeholder="0.00"
                                defaultValue={Number(currentItem?.priceUsd).toFixed(2)}
                                {...register('price', {
                                    required: 'Enter Price',
                                    pattern: {
                                        value: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/g,

                                        message: 'Price must be greater than 0',
                                    },
                                    onChange: onChangePrice,
                                })}
                                className="text-[18px] border border-solid border-gray dark:bg-secondD dark:border-none rounded pl-[15px] py-[4px] w-[95%]"
                            />
                        </div>

                        {errors.price && (
                            <h1 className="text-xs ml-[5px] text-[#FA8072]">
                                {errors.price.message}
                            </h1>
                        )}
                    </div>
                </div>

                <div className="w-100% bg-secondL dark:bg-secondD mt-[30px] py-[8px] px-[10px] rounded">
                    <h1>{type === 'buy' ? 'Total received' : 'Total spent'}</h1>
                    <h1 className=" text-xl">${total.toFixed(2)}</h1>
                </div>
                <input
                    type="submit"
                    value="Add Transaction"
                    className="bg-[#5367fe] text-white text-center dark:bg-secondD dark:hover:bg-black w-[100%] py-[15px] mt-[40px] rounded placeholder-white"
                />
            </form>
        </div>
    );
};

export default NewTransaction;
