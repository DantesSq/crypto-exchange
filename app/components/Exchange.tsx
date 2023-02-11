import React from 'react';
import ExchangeItem from './ExchangeItem';

const Exchange = () => {
    return (
        <div className="p-[25px] w-[22%] h-max bg-white rounded-xl">
            <h1 className="text-center pb-[20px] mb-[20px] border-b-2 border-primaryL border-solid text-primaryL hover:cursor-pointer">
                Sell / Buy coin
            </h1>
            <div>
                <div className="flex justify-between items-center flex-wrap  text-text text-[16px] ">
                    <div className="flex items-center hover:text-[black] hover:cursor-pointer">
                        <svg
                            className="fill-text"
                            height="20px"
                            width="20px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 76.304 76.304"
                            xmlSpace="preserve">
                            <g>
                                <path
                                    d="M72.325,33.234v-2.947c0-5.389-3.698-9.919-8.686-11.217l-0.009-4.859c0-4.742-3.859-8.601-8.603-8.601h-0.455L14.31,18.1
		c-0.917,0.053-1.787,0.265-2.604,0.584h-0.105C5.205,18.684,0,23.889,0,30.287v28.804c0,6.397,5.204,11.603,11.601,11.603h49.123
		c6.396,0,11.601-5.205,11.601-11.603V55.26c2.323-0.899,3.979-3.151,3.979-5.789v-10.45C76.303,36.385,74.648,34.133,72.325,33.234
		z M70.303,49.47c0,0.118-0.093,0.211-0.211,0.211H53.851c-0.118,0-0.21-0.093-0.21-0.211V39.021c0-0.115,0.094-0.209,0.21-0.209
		h16.241c0.116,0,0.211,0.094,0.211,0.209V49.47z M55.398,11.637c1.261,0.18,2.232,1.266,2.232,2.579l0.008,4.469H32.679
		L55.398,11.637z M60.724,64.693H11.602c-3.093,0-5.601-2.509-5.601-5.603V30.287c0-3.095,2.508-5.603,5.601-5.603h49.122
		c3.094,0,5.601,2.508,5.601,5.603v2.525H53.851c-3.424,0-6.21,2.785-6.21,6.209V49.47c0,3.425,2.786,6.211,6.21,6.211h12.474v3.41
		C66.325,62.184,63.818,64.693,60.724,64.693z"
                                />
                            </g>
                        </svg>
                        <h1 className="px-[10px] ">$0.00</h1>
                    </div>
                    <div className="flex items-center hover:text-[black] hover:cursor-pointer">
                        <img
                            alt=""
                            src={`https://assets.coincap.io/assets/icons/${'bTC'.toLowerCase()}@2x.png`}
                            width={25}
                            height={25}
                        />
                        <h1 className="px-[8px]">$0.00</h1>
                    </div>
                </div>
                <ExchangeItem />
                <div>
                    <button className="bg-[#5367fe] text-white text-center w-full h-[50px] mt-[30px] rounded placeholder-white">
                        Exchange
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Exchange;
