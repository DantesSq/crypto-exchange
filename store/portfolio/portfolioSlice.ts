import { cryptoItem } from '@/models/cryptoItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum transactionTypes {
    BUY = 'buy',
    SELL = 'sell',
}

export interface transaction {
    price: number;
    quantity: number;
    total: number;
    type: transactionTypes;
    transactionId: number;
}

interface coin {
    id: string;
    name: string;
    symbol: string;
    transactions: transaction[];
}

interface portfolio {
    id: number;
    balance: number;
    profit: number;
    investment: number;
    totalReturn: number;
    coins: coin[];
}

interface portfolioState {
    usersPortfolio: portfolio[];
    currentItem: cryptoItem | null;
    openMenu: boolean;
    openBuyMenu: boolean;
    type: transactionTypes;
    hide: boolean;
}

const initialState: portfolioState = {
    usersPortfolio: [
        {
            id: 1,
            balance: 0,
            profit: 0,
            investment: 0,
            totalReturn: 0,
            coins: [
                {
                    id: 'ethereum',
                    name: 'Ethereum',
                    symbol: 'eth',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 123,
                        },
                    ],
                },
                {
                    id: 'bitcoin',
                    name: 'Bitcoin',
                    symbol: 'btc',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 1231,
                        },
                    ],
                },
                {
                    id: 'binance-coin',
                    name: 'BNB',
                    symbol: 'bnb',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 12,
                        },
                    ],
                },
                {
                    id: 'polygon',
                    name: 'Polygon',
                    symbol: 'matic',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 1231,
                        },
                    ],
                },
                {
                    id: 'solana',
                    name: 'Solana',
                    symbol: 'sol',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 12333,
                        },
                    ],
                },
                {
                    id: 'polkadot',
                    name: 'Polkadot',
                    symbol: 'dot',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 123334,
                        },
                    ],
                },
                {
                    id: 'litecoin',
                    name: 'Litecoin',
                    symbol: 'LTC',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 12230,
                        },
                    ],
                },
                {
                    id: 'tron',
                    name: 'TRON',
                    symbol: 'trx',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 1,
                        },
                    ],
                },
                {
                    id: 'avalanche',
                    name: 'Avalanche',
                    symbol: 'avax',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 2,
                        },
                    ],
                },
                {
                    id: 'uniswap',
                    name: 'Uniswap',
                    symbol: 'uni',

                    transactions: [
                        {
                            price: 100,
                            quantity: 3,
                            total: 3600,
                            type: transactionTypes.BUY,
                            transactionId: 3,
                        },
                    ],
                },
            ],
        },
    ],
    currentItem: null,
    openMenu: false,
    openBuyMenu: false,
    type: transactionTypes.BUY,
    hide: false,
};

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        newPortfolio(state, action: PayloadAction<number>) {
            const id = action.payload;
            state.usersPortfolio.push({
                id: id,
                balance: 0,
                profit: 0,
                investment: 0,
                totalReturn: 0,
                coins: [],
            });
        },
        changeItem(state, action: PayloadAction<cryptoItem>) {
            state.currentItem = action.payload;
        },
        changeType(state, action: PayloadAction<transactionTypes>) {
            state.type = action.payload;
        },
        addTransaction(
            state,
            action: PayloadAction<{
                price: number;
                quantity: number;
                itemId: string;
                userId: number;
                symbol: string;
                name: string;
                type: transactionTypes;
            }>,
        ) {
            const { price, quantity, itemId, userId, symbol, name, type } = action.payload;
            const newTransaction = {
                price: price,
                quantity: quantity,
                total: price * quantity,
                type: type,
                transactionId: Math.random(),
            };

            for (let i in state.usersPortfolio) {
                if (state.usersPortfolio[i].id === userId) {
                    for (let y in state.usersPortfolio[i].coins) {
                        if (state.usersPortfolio[i].coins[y].id === itemId) {
                            state.usersPortfolio[i].coins[y].transactions.push(newTransaction);
                            return;
                        }
                    }
                    state.usersPortfolio[i].coins.push({
                        id: itemId,
                        name: name,
                        symbol: symbol,
                        transactions: [newTransaction],
                    });
                }
            }
        },
        changeOpenMenu(state, action: PayloadAction<boolean>) {
            state.openMenu = action.payload;
        },
        changeOpenBuyMenu(state, action: PayloadAction<boolean>) {
            state.openBuyMenu = action.payload;
        },
        changeHide(state) {
            state.hide = !state.hide;
        },

        setTotals(
            state,
            action: PayloadAction<{
                userId: number;
                investment: number;
                balance: number;
                profit: number;
                totalReturn: number;
            }>,
        ) {
            const { userId, balance, profit, investment, totalReturn } = action.payload;
            state.usersPortfolio[userId - 1].balance = balance;
            state.usersPortfolio[userId - 1].profit = profit;
            state.usersPortfolio[userId - 1].investment = investment;
            state.usersPortfolio[userId - 1].totalReturn = totalReturn;
        },
        removeCoin(state, action: PayloadAction<{ userId: number; symbol: string }>) {
            const { userId, symbol } = action.payload;
            for (let i in state.usersPortfolio) {
                if (state.usersPortfolio[i].id === userId) {
                    for (let j in state.usersPortfolio[i].coins) {
                        if (state.usersPortfolio[i].coins[j].symbol === symbol) {
                            state.usersPortfolio[i].coins.splice(Number(j), 1);
                        }
                    }
                }
            }
        },
        removeTransaction(
            state,
            action: PayloadAction<{ userId: number; symbol: string; transactionId: number }>,
        ) {
            const { userId, symbol, transactionId } = action.payload;
            for (let i in state.usersPortfolio) {
                if (state.usersPortfolio[i].id === userId) {
                    for (let j in state.usersPortfolio[i].coins) {
                        if (state.usersPortfolio[i].coins[j].symbol === symbol) {
                            if (state.usersPortfolio[i].coins[j].transactions.length === 1) {
                                state.usersPortfolio[i].coins.splice(Number(j), 1);
                            }
                            const coin = state.usersPortfolio[i].coins[j];
                            state.usersPortfolio[i].coins[j].transactions =
                                coin.transactions.filter(
                                    (item) => item.transactionId !== transactionId,
                                );
                        }
                    }
                }
            }
        },
    },
});

export const {
    changeOpenMenu,
    changeOpenBuyMenu,
    newPortfolio,
    changeItem,
    changeType,
    addTransaction,
    changeHide,
    setTotals,
    removeCoin,
    removeTransaction,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
