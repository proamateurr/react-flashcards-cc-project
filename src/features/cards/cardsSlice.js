import { createSlice } from "@reduxjs/toolkit";

//Slice Object

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            state.cards[id] = action.payload
        }
    }
})

//Selector

export const selectCard = (id) => (state) => state.cards.cards[id];

//Exports

export const {
    addCard
} = cardsSlice.actions;

export default cardsSlice.reducer;