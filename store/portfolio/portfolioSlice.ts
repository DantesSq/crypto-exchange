import { dataItem } from '@/app/(main)/page';
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
    coins: coin[];
}

interface portfolioState {
    usersPortfolio: portfolio[];
    currentItem: dataItem | null;
    openMenu: boolean;
    openBuyMenu: boolean;
    type: string;
    hide: boolean;
}

const initialState: portfolioState = {
    usersPortfolio: [
        {
            id: 1,
            balance: 10000,
            coins: [
                {
                    id: 'ethereum',
                    name: 'Ethereum',
                    symbol: 'eth',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'bitcoin',
                    name: 'Bitcoin',
                    symbol: 'btc',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'binance-coin',
                    name: 'BNB',
                    symbol: 'bnb',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'polygon',
                    name: 'Polygon',
                    symbol: 'matic',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'solana',
                    name: 'Solana',
                    symbol: 'sol',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'polkadot',
                    name: 'Polkadot',
                    symbol: 'dot',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'litecoin',
                    name: 'Litecoin',
                    symbol: 'LTC',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'tron',
                    name: 'TRON',
                    symbol: 'trx',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'avalanche',
                    name: 'Avalanche',
                    symbol: 'avax',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
                {
                    id: 'uniswap',
                    name: 'Uniswap',
                    symbol: 'uni',

                    transactions: [
                        { price: 100, quantity: 3, total: 3600, type: transactionTypes.BUY },
                    ],
                },
            ],
        },
    ],
    currentItem: null,
    openMenu: false,
    openBuyMenu: false,
    type: 'buy',
    hide: false,
};

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        newPortfolio(state, action: PayloadAction<number>) {
            const id = action.payload;
            state.usersPortfolio.push({ id: id, balance: 0, coins: [] });
        },
        changeItem(state, action: PayloadAction<dataItem>) {
            state.currentItem = action.payload;
        },
        changeType(state, action: PayloadAction<string>) {
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
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
