import { cryptoItem } from '@/models/cryptoItem';
import { transaction, transactionTypes } from '@/store/portfolio/portfolioSlice';
import { currencyFormat } from '@/utils/CurrencyFormat';
import React, { FC } from 'react';

interface TransactionProps {
    deleteTransaction: (arg: number) => void;
    transaction: transaction;
    cryptoItem: cryptoItem;
}

const Transaction: FC<TransactionProps> = ({ deleteTransaction, transaction, cryptoItem }) => {
    const { price, quantity, total, type, transactionId } = transaction;
    const onDeleteTransaction = () => {
        deleteTransaction(transactionId);
    };

    const textColor = type === transactionTypes.BUY ? 'text-green' : 'text-red';
    const symbolType = type === transactionTypes.BUY ? '+' : '-';

    return (
        <div className="flex dark:text-gray dark:hover:bg-primaryD  py-[13px] pl-[8px] text-[16px] border-b-[1px] border-solid border-grayL dark:border-text rounded hover:bg-grayL items-center">
            <div className="w-[50%]">
                <div className="flex items-center space-x-[8px]">
                    {type === transactionTypes.BUY ? (
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 8.5H14.5"
                                stroke="green"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 16.5H8"
                                stroke="green"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.5 16.5H14.5"
                                stroke="green"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
                                stroke="green"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <g opacity="0.4">
                                <path
                                    d="M20 3.5V9.5L22 7.5"
                                    stroke="green"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20 9.5L18 7.5"
                                    stroke="green"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    ) : (
                        <svg
                            className=""
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 8.5H14.5"
                                stroke="red"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                opacity="0.4"
                                d="M6 16.5H8"
                                stroke="red"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                opacity="0.4"
                                d="M10.5 16.5H14.5"
                                stroke="red"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
                                stroke="red"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <g opacity="0.4">
                                <path
                                    d="M20 9.5V3.5L22 5.5"
                                    stroke="red"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20 3.5L18 5.5"
                                    stroke="red"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    )}
                    <h1>{type.toUpperCase()}</h1>
                </div>
            </div>
            <div className="w-[20%]">{currencyFormat(price)}</div>
            <div className="w-[20%]">
                <div className="w-[20%]">
                    <div className=" mt-[-5px]">{currencyFormat(transaction.total)}</div>
                    <div className={`text-[14px] mt-[-5px] ${textColor}`}>
                        {symbolType}
                        {quantity}
                        {cryptoItem.symbol}
                    </div>
                </div>
            </div>
            <div className="w-[10%] hover:cursor-pointer" onClick={onDeleteTransaction}>
                Remove
            </div>
        </div>
    );
};

export default Transaction;
