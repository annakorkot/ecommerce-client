import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from './apis/productsApi';
import cartReducer from "./slices/cartSlice";
import { addProduct , removeProduct } from "./slices/cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        [productApi.reducerPath] : productApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    }
});

setupListeners(appStore.dispatch);

export default appStore;
export { addProduct ,removeProduct };
export { useFetchProductsQuery } from './apis/productsApi'