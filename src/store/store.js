
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
//import { dashboard } from './dashboard';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        //      dasboard: dashboard.reducer,
    },
});