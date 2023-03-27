import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },

    updateTuitLikes(state, action) {
      const tuit = state.find(tuit => tuit._id === action.payload);
      tuit.liked = !tuit.liked;
      if (tuit.liked) {
        tuit.likes--;
      } else {
        tuit.likes++;
      }
    }
  }
});

export const {createTuit, deleteTuit, updateTuitLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;