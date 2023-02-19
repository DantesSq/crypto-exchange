import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FC } from 'react';

import FindCoin from './FindCoin';
import NewTransaction from './NewTransaction';

const dropIn = {
    hidden: {
        y: '50%',
        width: 0,
        height: 0,
        opacity: 0,
    },
    visible: {
        y: 0,

        opacity: 1,
        width: 450,
        height: 430,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: '10s',
            type: 'spring',
            damping: 40,
            stiffness: 500,
        },
    },
    exit: {
        y: 10,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: '10s',
            type: 'spring',
            damping: 40,
            stiffness: 500,
        },
        opacity: 1,
    },
};

interface SearchComponentProps {
    openMenu: boolean;
    openBuyMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
    setOpenBuyMenu: (openMenu: boolean) => void;
}

const SearchComponent: FC<SearchComponentProps> = ({
    setOpenMenu,
    openBuyMenu,
    setOpenBuyMenu,
}) => {
    return (
        <AnimatePresence mode="wait" onExitComplete={() => null}>
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute flex items-center justify-center top-0 left-0 h-[100vh] w-full z-[100] bg-[#000000e1] ">
                <motion.div
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    className="py-[30px] px-[30px] bg-white dark:bg-primaryD overflow-y-scroll no-scrollbar rounded-lg relative shadow-lg">
                    <svg
                        className="absolute top-[12px] right-[12px] hover:cursor-pointer hover:w-[40px] hover:h-[40px] hover:top-[7px] hover:right-[7px] transition-all"
                        onClick={() => {
                            setOpenMenu(false);
                            setOpenBuyMenu(false);
                        }}
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                            fill="#0F1729"
                        />
                    </svg>
                    {!openBuyMenu ? (
                        <FindCoin setOpenMenu={setOpenMenu} setOpenBuyMenu={setOpenBuyMenu} />
                    ) : (
                        <NewTransaction setOpenBuyMenu={setOpenBuyMenu} setOpenMenu={setOpenMenu} />
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SearchComponent;
