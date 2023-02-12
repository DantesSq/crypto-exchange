import { dataItem } from '@/app/(main)/page';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface transaction {
    price: number;
    quantity: number;
    total: number;
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

                    transactions: [{ price: 1200, quantity: 3, total: 3600 }],
                },
            ],
        },
    ],
    currentItem: null,
    openMenu: false,
    openBuyMenu: false,
    type: 'buy',
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
            }>,
        ) {
            const { price, quantity, itemId, userId, symbol, name } = action.payload;
            const newTransaction = {
                price: price,
                quantity: quantity,
                total: price * quantity,
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
    },
});

export const {
    changeOpenMenu,
    changeOpenBuyMenu,
    newPortfolio,
    changeItem,
    changeType,
    addTransaction,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
