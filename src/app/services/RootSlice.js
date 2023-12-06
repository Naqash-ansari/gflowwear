// Wrapper.js
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiData, DeleteApiData, UpdateApiData } from "./ApiThunk"; // Import your async thunks

const initialState = {
    isLoading: false,
    productApiList: [],
    product: [],
};

const RootSlice = createSlice({
    name: 'frist application', // Consider giving a more meaningful name
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload,
            };
            state.product.push(data);
        },
        removeProduct: (state, action) => {
            const data = state.productApiList.filter((item) => item.id !== action.payload);
            state.productApiList = data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(ApiData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productApiList = action.payload;
            })
            .addCase(DeleteApiData.fulfilled, (state, action) => {
                state.isLoading = false;

                if (action.payload.success) {
                    const data = state.productApiList.filter((item) => item.id !== action.meta.arg);
                    state.productApiList = data;
                    console.log('Deletion successful:', action.payload);
                } else {
                    console.error('Deletion failed:', action.payload.error);
                }
            })
            .addCase(DeleteApiData.rejected, (state, action) => {
                state.isLoading = false;
                console.error('Deletion failed:', action.payload.error);
            })
            .addCase(UpdateApiData.fulfilled, (state, action) => {
                state.isLoading = false;

                if (action.payload.success) {
                    const updatedData = action.payload.updatedData;
                    state.productApiList = state.productApiList.map((item) =>
                        item.id === updatedData.id ? updatedData : item
                    );

                    // state.dispatch(showNotification({ type: 'success', message: 'Product updated successfully' }));

                    console.log('Update successful:', action.payload);
                } else {
                    console.error('Update failed:', action.payload.error);
                }
            });
    },
});

export const { addProduct, removeProduct } = RootSlice.actions;
export default RootSlice.reducer;
