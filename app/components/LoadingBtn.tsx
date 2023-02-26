import React from 'react';

const LoadingBtn = () => {
    return (
        <div className="">
            <button className="relative bg-[#5367fe] dark:bg-primaryD dark:hover:bg-black dark:border-text datk:text-text border-solid border-[1px] text-white text-center py-[15px] pl-[50px] pr-[25px] rounded-2xl placeholder-white">
                <svg
                    className="animate-spin w-[20px] h-[20px] absolute top-[20px] left-[15px]"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none">
                    <g fill="#000000" fill-rule="evenodd" clip-rule="evenodd">
                        <path
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                            opacity=".2"
                        />
                        <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
                    </g>
                </svg>
                loading...
            </button>
        </div>
    );
};

export default LoadingBtn;
