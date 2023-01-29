import React from 'react';

const Balance = () => {
    return (
        <div className="p-[20px] h-[auto] bg-white rounded-xl w-[100%]">
            <h1 className="text-[25px]">Portfolio</h1>

            <div className="lg:mt-[30px] md:flex md:justify-between text-black xl:flex-nowrap md:flex-wrap">
                <div className="xl:w-[30%] flex xl:flex-col w-full lg:justify-around items-center">
                    <div className="text-text lg:text-[15px] text-[20px] flex items-center">
                        <svg
                            className="fill-text mr-[6px]"
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
                        Available balance
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="lg:text-[30px] text-[25px] ml-[10px] mr-[10px] lg:ml-0">
                            $390,000
                        </h1>
                        <div className="relative flex items-center p-[8px] mr-[10px] rounded text-text lg:text-[13px] text-[18px] bg-[#008dff] bg-opacity-10 hover:bg-opacity-30 hover:cursor-pointer">
                            <h1 className="lg:pr-[20px] pr-[35px]">Hide Price</h1>
                            <svg
                                className="fill-text absolute right-[5px] top-[55%] translate-y-[-50%] lg:w-[20px] lg:h-[20px] w-[40px] h-[40px]"
                                version="1.1"
                                viewBox="0 0 600 600"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path d="m515.76 114.25c-4.5586-4.5586-11.941-4.5586-16.496 0l-55.156 55.156c-145.29-70.535-263.67 47.953-296.94 86.609-11.496 13.344-11.359 34.238 0.30859 47.543 28.113 32.117 57.324 57.43 87.023 75.457l-50.234 50.234c-4.5586 4.5586-4.5586 11.941 0 16.496 2.2812 2.2773 5.2656 3.418 8.25 3.418s5.9688-1.1406 8.25-3.418l314.99-315c4.5586-4.5586 4.5586-11.941 0-16.496zm-350.73 173.94c-3.9766-4.5352-4.0547-12.453-0.18359-16.953 38.273-44.461 138.44-138.66 261.73-84.301l-43.309 43.309c-9.8086-6.5625-21.285-10.23-33.258-10.23-33.086 0-59.996 26.91-59.996 59.984 0 12.07 3.543 23.586 10.125 33.375l-48.559 48.559c-29.328-16.887-58.41-41.59-86.551-73.742zm152.26 8.0312c-2.4844-4.9961-3.9414-10.473-3.9414-16.223 0-20.211 16.453-36.652 36.664-36.652 5.707 0 11.199 1.457 16.211 3.9414l-48.934 48.93zm235.55 7.7695c-30.863 35.879-105.84 108.95-204.03 108.95-18.434 0-37.664-2.5742-57.605-8.4531-6.1758-1.8242-9.707-8.3047-7.8828-14.492 1.8242-6.1641 8.3047-9.7188 14.492-7.8828 113.08 33.359 203.63-54.164 237.34-93.344 3.875-4.5 3.793-12.43-0.18359-16.977-19.516-22.285-39.605-41.164-59.688-56.125-5.1719-3.8398-6.2422-11.152-2.3945-16.316 3.8516-5.1484 11.164-6.2539 16.316-2.3945 21.41 15.926 42.711 35.934 63.324 59.461 11.668 13.34 11.793 34.238 0.30859 47.566zm-153.12-24.621c6.2773 1.4258 10.219 7.6797 8.7969 13.969-5.3672 23.617-24.246 41.586-48.102 45.766-0.68359 0.11328-11.086 1.625-13.512-9.4805-1.375-6.293 3.1328-12.395 9.4805-13.512 14.57-2.5508 26.102-13.523 29.371-27.949 1.4258-6.2891 7.6133-10.207 13.969-8.7969z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="xl:ml-[15px] xl:w-[70%] w-[100%] md:flex flex-none text-[15px] mt-[10px] justify-around flex-wrap">
                    <div className="md:w-[28%] md:p-[10px] rounded bg-[#0083ff] bg-opacity-25 hover:bg-opacity-40">
                        <div className="flex items-center">
                            <svg
                                className="mr-[6px]"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 8.5H14.5"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    opacity="0.4"
                                    d="M6 16.5H8"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    opacity="0.4"
                                    d="M10.5 16.5H14.5"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <g opacity="0.4">
                                    <path
                                        d="M20 9.5V3.5L22 5.5"
                                        stroke="#292D32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20 3.5L18 5.5"
                                        stroke="#292D32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                            Total investment
                        </div>
                        <div className="mt-[20px] text-[18px]">$30,000</div>
                    </div>
                    <div className="md:w-[28%] md:p-[10px] rounded bg-[#ff0900] bg-opacity-25 hover:bg-opacity-40">
                        <div className="flex items-center">
                            <svg
                                className="mr-[6px]"
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 8.5H14.5"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 16.5H8"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5 16.5H14.5"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <g opacity="0.4">
                                    <path
                                        d="M20 3.5V9.5L22 7.5"
                                        stroke="#292D32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20 9.5L18 7.5"
                                        stroke="#292D32"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                            Total return
                        </div>
                        <div className="mt-[20px] text-[18px]">$30,000</div>
                    </div>
                    <div className="md:w-[28%] md:p-[10px] rounded bg-[#00ff79] bg-opacity-25 hover:bg-opacity-40">
                        <div className="flex items-center">
                            <svg
                                className="fill-text h-[20px] w-[20px] mr-[6px]"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 24 24"
                                xmlSpace="preserve">
                                <style type="text/css"></style>
                                <g id="surface1">
                                    <path
                                        d="M10.5,2C9.8,2,9.3,2.4,9.1,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V11
		c0-0.6-0.4-1-1-1h-2V5c0-1.1-0.9-2-2-2h-4.1C11.7,2.4,11.2,2,10.5,2z M10.5,3C10.8,3,11,3.2,11,3.5S10.8,4,10.5,4S10,3.8,10,3.5
		S10.2,3,10.5,3z M5.5,5H8v1h5V5h2.5C15.8,5,16,5.2,16,5.5V10h-3c-0.6,0-1,0.4-1,1v8H5.5C5.2,19,5,18.8,5,18.5v-13
		C5,5.2,5.2,5,5.5,5z M10.6,8.4h-4v2h4V8.4z M10.6,11.4h-4v2h4V11.4z M10.6,14.5h-4v2h4V14.5z M14,12h5v2h-5V12z M14,15h2v2h-2V15z
		 M17,15h2v2h-2V15z M14,18h2v2h-2V18z M17,18h2v2h-2V18z"
                                    />
                                </g>
                            </svg>
                            All Time Profit
                        </div>
                        <div className="mt-[20px] text-[18px]">$30,000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
