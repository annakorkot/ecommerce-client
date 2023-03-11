import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./slices/cartSlice";
import userReducer from './slices/userSlice';
import { addProduct, removeProduct, decrementQuantity, incrementQuantity, hideCart, showCart } from "./slices/cartSlice";
import { categoriesReducer } from "./slices/categorySlice";
import { productsReducer } from "./slices/productSlice";
import { logout } from './slices/userSlice';

const appStore = configureStore({
    reducer: {
        categories: categoriesReducer,
        cart: cartReducer,
        user: userReducer,
        products: productsReducer

    },

});

setupListeners(appStore.dispatch);

export * from './thunks/productsThunk'
export * from './thunks/userThunk'
export * from './thunks/fetchCategories';
export default appStore;
export { addProduct, removeProduct, incrementQuantity, decrementQuantity, showCart, hideCart };
export { logout };
