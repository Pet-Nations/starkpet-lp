import {createSlice} from '@reduxjs/toolkit';

interface WalletState {
    open: boolean,
    isConnected: boolean;
    total: number
}

const initialState: WalletState = {
    open: false,
    isConnected: false,
    total: 0
};

const walletStatus = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setWalletStatus: (state, action) => {
            state.isConnected = action.payload.isConnected;
        },
        setWalletTotal: (state, action) => {
            state.total = action.payload;
        },
        setOpenConnectWallet: (state, action) => {
            state.open = action.payload;
        }
    },
});

export const {
    setWalletStatus,
    setWalletTotal,
    setOpenConnectWallet
} = walletStatus.actions;

export default walletStatus.reducer;
