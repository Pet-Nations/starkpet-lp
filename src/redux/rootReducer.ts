// redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
// Import your slice reducers here
import nodeSaleReducer from './slices/nodeSaleSlice';
import walletReducer from './slices/walletSlice';

const rootReducer = combineReducers({
    // Add your reducers here
    nodeSale: nodeSaleReducer,
    wallet: walletReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
