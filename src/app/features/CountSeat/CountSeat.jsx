import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'count',
  initialState: {
    selectedCount: null,
    countSet: [
      { name: 1 },
      { name: 2 },
      { name: 3 },
      { name: 4 },
      { name: 5 },
    ],
  },
  reducers: {
    setSelectedCount: (state, action) => {
      state.selectedCount = action.payload;
    },
  },
});

export const { setSelectedCount } = countSlice.actions;

export default countSlice.reducer;
