import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from './apis/productsApi';
import cartReducer from "./slices/cartSlice";
import { addProduct , removeProduct ,decrementQuantity,incrementQuantity} from "./slices/cartSlice";

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
export { addProduct ,removeProduct ,incrementQuantity,decrementQuantity };
export { useFetchProductsQuery } from './apis/productsApi'