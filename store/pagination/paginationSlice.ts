import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    currentPage: 1,
    itemsPerPage: 6,
    pages: [undefined],
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPages(state, action: PayloadAction<number>) {
            state.pages = [...new Array(action.payload)];
        },
        setNextPage(state, action: PayloadAction<number>) {
            if (Math.ceil(action.payload / state.itemsPerPage) > state.currentPage)
                state.currentPage++;
        },
        setPrevPage(state) {
            if (state.currentPage > 1) state.currentPage--;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            if (action.payload <= state.pages.length) state.currentPage = action.payload;
        },
    },
});

export const { setPages, setNextPage, setPrevPage, setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
