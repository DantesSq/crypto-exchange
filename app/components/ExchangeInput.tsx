import React, { FC } from 'react';

interface ExchangeInputProps {
    id: string;
    amount: number;
    disabled: boolean;
}

const ExchangeInput: FC<ExchangeInputProps> = ({ id, amount }) => {
    return (
        <>
            <input
                className="w-full p-[15px] pt-[20px] border-2 border-gray border-solid rounded"
                value={amount}
            />
            <div className="flex items-center hover:cursor-pointer absolute top-[50%] translate-y-[-50%] right-[10px] text-text text-[13px]">
                <img
                    className="pr-[5px]"
                    alt=""
                    src={`https://assets.coincap.io/assets/icons/${id.toLowerCase()}@2x.png`}
                    width={30}
                    height={30}
                />
                <h1 className="px-[5px]">{id.toUpperCase()}</h1>
                <svg
                    className="fill-gray"
                    height="12px"
                    width="12px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 330 330"
                    xmlSpace="preserve">
                    <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    />
                </svg>
            </div>
        </>
    );
};

export default ExchangeInput;
