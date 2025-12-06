import { createSlice } from "@reduxjs/toolkit"; 

//Slice Object

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    },
})

//Selectors

export const selectQuizzes = (state) => state.quizzes.quizzes;

//Exports

export const {
    addQuiz
} = quizzesSlice.actions;

export default quizzesSlice.reducer;