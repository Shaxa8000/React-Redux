import { configureStore } from '@reduxjs/toolkit';
import  userReducers from '../features/Users';





export const store = configureStore({
    reducer: {
        users: userReducers,

    }
})