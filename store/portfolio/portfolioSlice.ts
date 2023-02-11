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
        addTransaction(state, action) {
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
    },
});

export const { newPortfolio, changeItem, changeType, addTransaction } = portfolioSlice.actions;

export default portfolioSlice.reducer;
