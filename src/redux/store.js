import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./slices/cartSlice";
import userReducer from './slices/userSlice';
import { addToCart, removeProduct, decrementQuantity, incrementQuantity, hideCart, showCart } from "./slices/cartSlice";
import { categoriesReducer } from "./slices/categorySlice";
import { productsReducer } from "./slices/productSlice";
import { logout } from './slices/userSlice';
import  productsByCategoryReducer  from "./slices/productsByCategorySlice";
import { selectCategory } from "./slices/productsByCategorySlice";

const appStore = configureStore({
    reducer: {
        categories: categoriesReducer,
        cart: cartReducer,
        user: userReducer,
        products: productsReducer,
        productsByCategory:productsByCategoryReducer
    },

});

setupListeners(appStore.dispatch);

export * from './thunks/productsThunk';
export * from './thunks/userThunk';
export * from './thunks/fetchCategories';
export default appStore;
export { addToCart, removeProduct, incrementQuantity, decrementQuantity, showCart, hideCart ,selectCategory};
export { logout };
