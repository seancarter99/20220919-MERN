import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/userSlice';

// Give store to the Provider
export const store = configureStore({
    reducer: {
        // insider here goes my reducers
        user,
        // Add any other reducers here bank, counter, cart, etc.
    }
});