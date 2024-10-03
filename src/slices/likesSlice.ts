import { createSlice } from '@reduxjs/toolkit';

interface LikesState {
  likedProducts: number[];
}

const initialState: LikesState = {
  likedProducts: [],
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const productId = action.payload;
      if (state.likedProducts.includes(productId)) {
        state.likedProducts = state.likedProducts.filter(id => id !== productId);
      } else {
        state.likedProducts.push(productId);
      }
    },
  },
});

export const { toggleLike } = likesSlice.actions;

export default likesSlice.reducer;
