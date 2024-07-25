import {createSlice} from '@reduxjs/toolkit';

interface NodeSaleState {
    open: boolean,
    pricePerNode: number,
    nodeForSale: number,
    priceInput: number,
    sold: number,
}

const initialState: NodeSaleState = {
    priceInput: 0,
    nodeForSale: 0,
    pricePerNode: 0,
    sold: 0,
    open: false
};

const nodeSaleSlice = createSlice({
    name: 'nodeSale',
    initialState,
    reducers: {
        incrementPrice(state) {
            state.priceInput += 1;
        },
        decrementPrice(state) {
            if (state.priceInput > 0) {
                state.priceInput -= 1;
            }
        },
        setPrice: (state, action) => {
          state.priceInput = action.payload;
        },
        setNodeSale: (state, action) => {
            state.nodeForSale = action.payload.nodeForSale;
            state.sold = action.payload.sold;
            state.pricePerNode = action.payload.pricePerNode;
        },
        setOpenBuyNode: (state, action) => {
            state.open = action.payload
        }
    },
});

export const {
    incrementPrice,
    decrementPrice,
    setNodeSale,
    setOpenBuyNode,
    setPrice
} = nodeSaleSlice.actions;

export default nodeSaleSlice.reducer;
