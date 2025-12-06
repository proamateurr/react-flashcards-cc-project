import { createSlice } from "@reduxjs/toolkit";

//Slice Object

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: [],
      };
    },
  },
  extraReducers: {
    "quizzes/addQuiz": (state, action) => {
      const { id, topicId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(id);
      } else {
      }
    },
  },
});

//Selectors

export const selectTopics = (state) => state.topics.topics;

//Exports

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
