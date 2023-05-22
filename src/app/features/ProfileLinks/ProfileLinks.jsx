import { createSlice } from '@reduxjs/toolkit';

const profileLinkSlice = createSlice({
    name: 'profileLink',
    initialState: 0,
    reducers: {
        setActiveProfile: (state, action) => {
            return action.payload;
        },
    },
});

export const { setActiveProfile } = profileLinkSlice.actions;
export default profileLinkSlice.reducer;
