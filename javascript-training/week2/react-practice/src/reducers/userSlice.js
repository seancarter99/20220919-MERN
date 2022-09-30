import { createSlice } from '@reduxjs/toolkit';

// Slices is the modern toolkit way of bundling actions and reducers into one

const userSlice = createSlice({
    name: 'user', // The name is for redux to determine where it goes
    initialState: {
        username: '',
        friends: [],
        // Store other user data here
    },
    reducers: {
        // Reducers contain functions that solve some common action that I want
        // State refers to the state of the user
        addFriend: (state, action) => {
            // They use a library called Immer which allows to directly mutate the state
            // When this action is dispatched, it will contain a payload of the friend to add
            state.friends = [...state.friends, action.payload];
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        }
    }
});

// Once this is created, I'll have a reducers object on it
// And the individual actions

// The action names are derived from the reducer names
export const { addFriend, setUsername } = userSlice.actions;
export default userSlice.reducer; // Export the actual user reducer