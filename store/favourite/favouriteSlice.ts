import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface favouriteState {
    favourite: string[];
}

const initialState: favouriteState = {
    favourite: [],
};

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        changeFavourite(state, action: PayloadAction<string>) {
            if (state.favourite.includes(action.payload)) {
                state.favourite = state.favourite.filter((item) => item !== action.payload);
            } else state.favourite.push(action.payload);
        },
    },
});

export const { changeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
