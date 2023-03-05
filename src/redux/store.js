import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productApi } from './apis/productsApi';
import { categoryApi } from "./apis/categoriesApi";
import cartReducer from "./slices/cartSlice";
import authReducer from './slices/authSlice'
import { addProduct , removeProduct ,decrementQuantity,incrementQuantity} from "./slices/cartSlice";

const appStore = configureStore({
    reducer: {
        auth:authReducer,
        cart: cartReducer,
        [productApi.reducerPath] : productApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productApi.middleware)
        .concat(categoryApi.middleware);
    }
});

setupListeners(appStore.dispatch);

export default appStore;
export { addProduct ,removeProduct ,incrementQuantity,decrementQuantity };
export { useFetchProductsQuery } from './apis/productsApi'
export { useFetchCategoriesQuery } from './apis/categoriesApi'